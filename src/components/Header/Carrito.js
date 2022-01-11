import React from "react";
import { useContexto } from "../../CartContext";
import { Link } from "react-router-dom";

const Carrito = () => {

    const {carrito, borrarDelCarrito, vaciarCarrito } = useContexto() ;
    
    
        return (
            <>
            
                {carrito.length > 0 ? (
                    <ul>
                    {carrito.map((prod) => {
                        return (
                          <div key={prod.id} item={prod} borrarDelCarrito={()=>borrarDelCarrito(prod)}>
                            <li >
                              {prod.nombre} - $ {prod.precio} - cantidad {prod.cantidad}
                              <button className="botones" onClick={borrarDelCarrito}>borrar item del carrito</button>
                            </li>
              
                           
                          </div>
                        );
                      })}
                       <button className="botones" onClick={vaciarCarrito}>Vaciar Carrito</button>
                     </ul>
                ): <>
                <h4>No Agregaste Ningun Articulo Al Carrito</h4> 
                      <Link to={"/productos"}>
                        <button>Ver todos los productos</button>
                      </Link>
                </>
                }
                
             
              
            </>
          );
        

        
    

    
}


export default Carrito