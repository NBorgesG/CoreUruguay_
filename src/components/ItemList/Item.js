import React from "react";
import {Link} from "react-router-dom";

const Item = ({id, title, price, stock, img}) =>{
    return(
        <>
        
        <div className="contItem">
        <div className="listaProd">
            
            <div><h5>{title}</h5></div>
            <div className="img"><img src={img} alt="" /></div>
            <div><h5>Precio: ${price} </h5></div>
            <div><h5>Unidades disponibles: {stock}</h5></div>  
            <div className="links2"><Link to={`/productos/${id}`}>Ver Producto</Link></div>
            
        </div>
        </div>

        
       
        
        
        </>
    )
}  

export default Item; 