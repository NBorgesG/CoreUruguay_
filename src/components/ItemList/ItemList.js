import React from "react";
import Item from "./Item";

const ItemList = ({productos}) => {
  
  
    if (productos !== []) {
      return (<>
          <div className="listaProd2">
            {productos.map((prod) => {
              return (
                <Item
                  id={prod.id}
                  title={prod.title}
                  price={prod.price}
                  stock={prod.stock}
                  img={prod.image}
                />
              );
            })}
          </div>
        </>
      );
    }else{
      return null;
    }
        
        
   
    
} 

export default ItemList