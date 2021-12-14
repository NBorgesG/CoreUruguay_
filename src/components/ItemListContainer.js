import React from "react"
import ItemCount from "./ItemCount"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ItemListContainer = (props) =>{

    const notify = () => toast("Producto agregado con exito al carrito!");  

    function onAdd () {
        notify();
    }

    

    return (
        <>
        <div className="bienvenida "><h2>Bienvenido {props.nombre} {props.otro}! </h2>
        </div>
        <div><ItemCount stock={3} initial={1} onAdd={onAdd}/></div>
        <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
        
        </>
    )
} 




export default ItemListContainer