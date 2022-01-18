import React from "react";  
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { bd } from "../../firebase";
import {collection, doc, getDoc} from "firebase/firestore"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]); 
    

    const {id} = useParams()
    
    
    useEffect(() => {
      const prodCollecion = collection(bd, "productos")
      const refDoc = doc(prodCollecion, id)

      getDoc(refDoc)
        .then((producto) => {
            setProducto(producto.data())
        })
        .catch((error) =>{
          console.log(error);
        })

  }, [id]);
      
return (
  
    <>
    <ItemDetail producto={producto}/>
    </>
)


}




export default ItemDetailContainer