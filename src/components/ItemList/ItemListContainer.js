import React from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect , useState} from "react";

const ItemListContainer = (props) =>{

    const notify = () => toast("Producto agregado con exito al carrito!");  

    const [productos, setProductos] = useState([]); 


    const url = "https://mocki.io/v1/55cb5a91-c980-4a0d-9a78-3cb948a11a4d";
    
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const json = await response.json();
            setProductos(json)
            
          } catch (error) {
            console.log("error", error);
          }
        };
    
    useEffect(() => {
        setTimeout(() => {
            fetchData();
        }, 2000);
        
    }, []);
    
    

    function onAdd (cantidad) {
        notify();
        
    }

    return (
        <>
        <div className="bienvenida"><h2>Bienvenido {props.nombre} {props.otro}! </h2>
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
        <div><h2>PRODUCTOS</h2></div>
        <div><ItemList productos={productos}/></div>   
                    
        
        </>
    )
} 




export default ItemListContainer