import React from "react";
import Item from "./Item";

const ItemList = ({productos}) => {
  

    if (productos !== []) {
      return (<>
          <div className="listaProd">
            {productos.map((prod) => {
              return (
                <Item
                  key={prod.id}
                  title={prod.nombre}
                  price={prod.precio}
                  stock={prod.stock}
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