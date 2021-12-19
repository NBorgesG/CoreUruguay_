import React from "react";  
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {

    const [items, setItems] = useState([]); 


    const url = "https://mocki.io/v1/55cb5a91-c980-4a0d-9a78-3cb948a11a4d";
    
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const json = await response.json();
            setItems(json)
            
          } catch (error) {
            console.log("error", error);
          }
        };
    
    useEffect(() => {
        setTimeout(() => {
            fetchData();
        }, 2000);
        
    },[]);

    let item = []
    item= items.slice(0,1)
    console.log(item);

    
return (
  
    <>
    <ItemDetail item={item}/>
    
    
    </>
)


}




export default ItemDetailContainer