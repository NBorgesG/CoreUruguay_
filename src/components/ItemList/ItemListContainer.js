import React from "react"

import ItemList from "./ItemList";
import { useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import { bd } from "../../firebase";
import {getDocs, query, collection, where} from "firebase/firestore"


const ItemListContainer = (props) =>{

    const [productos, setProductos] = useState([]); 
    const {id} = useParams() 
      
    
    useEffect(() => {

      const prodCollecion  = collection(bd, "productos")

      if (id) {
          const consulta = query(prodCollecion, where ("categoryId", "==" , id))
          getDocs(consulta)
            .then(({ docs }) =>{
              setProductos(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            })
            .catch((error) => {
              console.log(error);
            })
      }else{
        getDocs(prodCollecion)
         .then(({docs}) => {
           setProductos(docs.map((doc) =>({ id: doc.id, ...doc.data()})))
         })
         .catch((error)=>{
           console.log(error);
         })
      }
      
  }, [id]);
    
    console.log(productos);

    return (
        <>
        <div><h2>PRODUCTOS</h2></div>
        
        
        <div><ItemList productos={productos}/></div>   
        </>
    )
} 




export default ItemListContainer