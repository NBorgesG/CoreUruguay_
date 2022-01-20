import React from "react"

import ItemList from "./ItemList";
import { useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import { bd } from "../../firebase";
import {getDocs, query, collection, where, doc} from "firebase/firestore"


const ItemListContainer = (props) =>{

    const [productos, setProductos] = useState([]); 
    const {nombre} = useParams()
    
    useEffect(() => {

      const prodCollecion  = collection(bd, "productos")

      const consumirBd = (info) =>{
        getDocs(info)
          .then((resultado) =>{
            const docs = resultado.docs
            const lista = docs.map((doc)=>{
            const id= doc.id
            const data = doc.data()
            const producto = {
              id: id,
              ...data
            }
            return producto;
            
          })
          
          setProductos(lista)
        })
        .catch((error) => {
          console.log(error);
        })
      }

      if (nombre) {
        const consulta = query(prodCollecion, where ("categoryId", "==" , nombre))
        consumirBd(consulta)  
      }else{
        consumirBd(prodCollecion)}
      
  }, [nombre]);
    
    console.log(productos);

    return (
        <>
        <div><h2>PRODUCTOS</h2></div>
        
        
        <div><ItemList productos={productos}/></div>   
        </>
    )
} 




export default ItemListContainer