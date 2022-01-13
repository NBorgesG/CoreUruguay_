import { createContext, useContext, useState } from "react";

const contexto = createContext();



export const {Provider} = contexto

export const useContexto = () => {
    return useContext(contexto)
}

const CustomProvider = ({children}) => {
    const [cantidadTotal, setCantidadTotal] = useState(0)
    const [carrito, setCarrito] = useState([])
    const [precioTotal, setPrecioTotal] = useState(0)

    
    const agregarAlCarrito = (producto, cantidad) =>{
        
        const copiaCarrito = [...carrito]
        let item = copiaCarrito.find((obj)=>obj.id === producto.id)

        if (item) {
            const precio = producto.precio * cantidad;
            item.cantidad = item.cantidad + cantidad;
            setCantidadTotal(cantidadTotal + cantidad)
            setCarrito(copiaCarrito)
            setPrecioTotal(precioTotal+precio)
        }else{
            const precio = producto.precio * cantidad;
            let prodAux = {...producto, cantidad}
            setCarrito([...carrito, prodAux]);
            setCantidadTotal(cantidadTotal+cantidad)  
            setPrecioTotal(precioTotal+precio)                    
        }
    }
    
    const borrarDelCarrito = (id, cant, precio) => {
        let copiaCarrito =carrito.filter(obj=> obj.id !== id)     
        setCarrito(copiaCarrito)
        setCantidadTotal(cantidadTotal - cant)
        setPrecioTotal(precioTotal - (precio * cant))
        
    }
    
    const vaciarCarrito = () => {
        setCarrito([])
        setCantidadTotal(0)
    }

    const valorDelContexto  = {
        cantidadTotal,
        carrito,
        precioTotal,
        agregarAlCarrito,
        borrarDelCarrito,
        vaciarCarrito,
        
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}


export default CustomProvider