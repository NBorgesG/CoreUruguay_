import React from "react";
import { useContexto } from "../../CartContext";
import { Link } from "react-router-dom";

const Carrito = () => {

    const {carrito, borrarDelCarrito, vaciarCarrito, precioTotal} = useContexto() ;
   
    
        return (
            <> 
            <div className="container">
            
                {carrito.length > 0 ? (
                  <>
                  <ul>
                    {carrito.map((prod) => {
                        return (
                          <div>
                            <div><li> {prod.nombre} - Precio unitario $ {prod.precio} - cantidad {prod.cantidad} - precio total $ {prod.precio * prod.cantidad}
                            <button className="botones " onClick={()=>borrarDelCarrito(prod.id, prod.cantidad, prod.precio)}>Borrar item del carrito</button></li>

                              
                              </div>
                          </div>
                        );
                      })}
                      
                     </ul>
                     <div >
                          <div className="boton"><button onClick={vaciarCarrito}>Vaciar Carrito</button></div>
                        
                        <h4 className="msj precio">Precio Total de factura: ${precioTotal}</h4>
                        
                     </div>
                                 
                </>
                    
                ): 
                <>
                <div className="msj">
                  <h4>No Agregaste Ningun Articulo Al Carrito</h4> 
                      <Link to={"/productos"}>
                        <button className="botones">Ver todos los productos</button>
                      </Link></div>
                
                </>
                }
                
            
                </div>
            </>
          );
        

        
    

    
}


export default Carrito