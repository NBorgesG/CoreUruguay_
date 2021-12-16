import React from "react";

const Item = ({title, price, stock}) =>{
    return(
        <>
        <div className="listaProd2">
            
            <div><h5>{title}</h5></div>
            <div><h5>Precio: {price} </h5></div>
            <div><h5>Unidades disponibles: {stock}</h5></div>  
            <div ><button className="botones">+</button><button className="botones">-</button></div>
        </div>
        
        </>
    )
}  

export default Item; 