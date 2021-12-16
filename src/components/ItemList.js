import React from "react";
import Item from "./Item";

const ItemList = ({productos}) => {

    
        
        return(
            <>
            <div className="listaProd">
                
                {productos.map((prod) => {
                  return  <Item key={prod.id} title={prod.nombre} price={prod.precio} stock={prod.stock}/>
                })}
     
            </div>
            
            </>
        )
   
    
} 

export default ItemList