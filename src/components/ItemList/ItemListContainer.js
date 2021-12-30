import React from "react"

import ItemList from "./ItemList";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect , useState} from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) =>{

    const notify = () => toast("Producto agregado con exito al carrito!");  

    const [productos, setProductos] = useState([]); 
    const [loading, setLoading] = useState(true)

    const {id} = useParams()
    
    const url = "https://mocki.io/v1/1ebd2e52-c5e7-4c01-8f3b-a694333e1be4";
    
        const getProducto = async () => {
          
            const pedido = await fetch(url);
            const productos = await pedido.json();
            if (id) {
              return productos.filter(producto=>producto.categoria==id)
            }else{
              return productos
            }
            
          
        };
    
    
    useEffect(() => {
    
      getProducto()
      .then((res) => {
        setProductos(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
     
    
      
  }, [id]);
    
    

    return (
        <>
        <div><h2>PRODUCTOS</h2></div>
        <div><ItemList productos={productos}/></div>   
        </>
    )
} 




export default ItemListContainer