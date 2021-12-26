import React from "react";
import ItemCount from "../ItemList/ItemCount";


const ItemDetail = ({producto}) => {
    

    function onAdd (cantidad) {
        console.log("producto agregado al carrito");
        
    }
        
            return (
                <><h2>PRODUCTO</h2>     
                <div className="listaProd2">

                {producto.map((prod) =>{
                    return <div><h5>{prod.nombre}</h5>
                    <h5>Precio:  ${prod.precio}</h5>
                    <h5>{prod.descripcion}</h5>
                    <ItemCount stock={prod.stock} initial={1} onAdd={onAdd}/>   
                    </div>
                })}
                   
                </div>
             </>
            )
            
       
        
}







export default ItemDetail 