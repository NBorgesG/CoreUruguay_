import { createContext, useContext, useState } from "react";

const contexto = createContext();



export const {Provider} = contexto

export const useContexto = () => {
    return useContext(contexto)
}

const CustomProvider = ({children}) => {
    const [cantidadTotal, setCantidadTotal] = useState(0)
    const [carrito, setCarrito] = useState([])

    const sumarTotal = () =>{
        setCantidadTotal(cantidadTotal+1)
    }

    
    const agregarAlCarrito = (producto, cantidad) =>{

        let item = carrito.find((obj)=>obj.id === producto.id)

        if (!item) {
            const productoAux = {...producto}
            productoAux.cantidad = cantidad
            setCarrito([...carrito, productoAux]);
            sumarTotal()
        }else{
            item.cantidad = item.cantidad + cantidad
            setCarrito([...carrito])
        }
    }
    

    const borrarDelCarrito = (info) => {
        let item = carrito.find((obj)=> obj.id ===info.id)
        console.log(item);
        let index = carrito.indexOf(item);
        carrito.splice(index, 1)
        setCarrito([...carrito])
        setCantidadTotal(cantidadTotal-1)
    }

    const vaciarCarrito = () => {
        setCarrito([])
        setCantidadTotal(0)
    }

    const valorDelContexto  = {
        cantidadTotal,
        carrito,
        agregarAlCarrito,
        borrarDelCarrito,
        vaciarCarrito
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}


export default CustomProvider