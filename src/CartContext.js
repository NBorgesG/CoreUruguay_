import { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";

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
            const precio = producto.price * cantidad;
            item.cantidad = item.cantidad + cantidad;
            setCantidadTotal(cantidadTotal + cantidad)
            setCarrito(copiaCarrito)
            setPrecioTotal(precioTotal+precio)
        }else{
            const precio = producto.price * cantidad;
            let prodAux = {...producto, cantidad}
            setCarrito([...carrito, prodAux]);
            setCantidadTotal(cantidadTotal+cantidad)  
            setPrecioTotal(precioTotal+precio)                    
        }
    }
    
    const borrarDelCarrito = (item) => {
        let copiaCarrito =carrito.filter(obj=> obj.id !== item.id)     
        setCarrito(copiaCarrito)
        setCantidadTotal(cantidadTotal - item.cantidad)
        setPrecioTotal(precioTotal - (item.price * item.cantidad))
        
    }
    
    const vaciarCarrito = () => {
        setCarrito([])
        setCantidadTotal(0)
        setPrecioTotal(0)
    }
    const borrarUnItem = (item) =>{
        let copiaCarrito = [...carrito]
        let objeto = copiaCarrito.find((obj)=> obj.id==item.id);
        
        if (objeto.cantidad >1) {
            objeto.cantidad = objeto.cantidad -1;
            setCarrito(copiaCarrito)
            setPrecioTotal(precioTotal - objeto.price)
            setCantidadTotal(cantidadTotal -1)
        }else{
            borrarDelCarrito(item)
        }
        
    }

    const sumarUnItem = (item) => {
        let copiaCarrito = [...carrito]
        let objeto = copiaCarrito.find((obj)=> obj.id==item.id);
        let price = item.price*1;
        if (objeto.cantidad < objeto.stock) {
            objeto.cantidad = objeto.cantidad + 1;
            setCarrito(copiaCarrito)
            setPrecioTotal(precioTotal + price)
            setCantidadTotal(cantidadTotal + 1)
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No hay mas stock del producto seleccionado!'
            })
        }
        
    }
    const valorDelContexto  = {
        cantidadTotal,
        carrito,
        precioTotal,
        agregarAlCarrito,
        borrarDelCarrito,
        vaciarCarrito,
        borrarUnItem,
        sumarUnItem
        
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}


export default CustomProvider