import React from "react";


const ItemDetail = ({item}) => {
    
        return (
            <><h2>PRODUCTO</h2>
            <div className="listaProd2">
                
                {item.map((prod) =>{
                    return(
                        <>
                        <div><h5>{prod.nombre}</h5></div>
                        <div><h5>Precio:  ${prod.precio}</h5></div>
                        <div><h5>{prod.sescripcion}</h5></div>
                        <div ><button className="botones">+</button><button className="botones">-</button></div>
                        </>   
                    )
                })}
                   
            </div>
            </>
        )
}







export default ItemDetail 