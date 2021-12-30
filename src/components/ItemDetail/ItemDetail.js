import React from "react";
import ItemCount from "../ItemList/ItemCount";
import { useState } from "react";
import { NavLink} from "react-router-dom";


const ItemDetail = ({producto}) => {
    
    const [estado, setEstado] =useState(true);

    function onAdd (cantidad) {
        console.log("producto agregado al carrito");
        setEstado(false)
        
    }
        if (estado===true) {
            return  <><h2>PRODUCTO</h2>     
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
            
        }else{
            return (
                <><h2>PRODUCTO</h2>     
                     <div className="listaProd2">

                    {producto.map((prod) =>{
                    return <div><h5>{prod.nombre}</h5>
                    <h5>Precio:  ${prod.precio}</h5>
                    <h5>{prod.descripcion}</h5>
                    <NavLink to="/carrito"><button className="botones">Finalizar Compra</button></NavLink>
                    
                    
                    </div>
                })}
                   
                </div>
             </>
            )

        }
            
            
       
        
}







export default ItemDetail 