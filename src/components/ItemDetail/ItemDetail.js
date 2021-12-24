import React from "react";


const ItemDetail = ({producto}) => {
        

        
            return (
                <><h2>PRODUCTO</h2>     
                <div className="listaProd2">
                {producto.map((prod) =>{
                    return <div><h5>{prod.nombre}</h5>
                    <h5>Precio:  ${prod.precio}</h5>
                    <h5>{prod.descripcion}</h5></div>
                    
                })}
                       
                </div>
             </>
            )
            
       
        
}







export default ItemDetail 