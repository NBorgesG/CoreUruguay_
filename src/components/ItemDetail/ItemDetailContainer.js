import React from "react";  
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]); 
    const [loading, setLoading] = useState(true)

    const {id} = useParams()
    
    const url = "https://mocki.io/v1/1ebd2e52-c5e7-4c01-8f3b-a694333e1be4";
    
        const getProducto = async () => {
          
            const pedido = await fetch(url);
            const productos = await pedido.json();
            return productos.find((producto)=>producto.id==id)
      };
    
    
    useEffect(() => {
    getProducto()
      .then((res) => {
        setProducto(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);
        
    
console.log(producto);
   

    
return (
  
    <>
    <ItemDetail producto={producto}/>
    </>
)


}




export default ItemDetailContainer