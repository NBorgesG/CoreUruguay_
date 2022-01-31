import React from "react";
import { useContexto } from "../../CartContext";
import { Link, NavLink} from "react-router-dom";

const Carrito = () => {

    const {carrito, borrarDelCarrito, vaciarCarrito, precioTotal, borrarUnItem, sumarUnItem} = useContexto() ;

    
    
        return (
            <> 
            
            <div className="containerCarrito">
            
            
                {carrito.length > 0 ? (
                  <div >
                    <div><h4>Carrito</h4></div>
                  <div>
                  
                  {carrito.map((prod) => {
                      return (
                        <div className="itemCarrito">
                          <img src="" alt="" />
                          
                          <div className="lineaCarrito"> <div className="linea2Carrito">
                          <h5>{prod.title} - Precio $ {prod.price} - cantidad {prod.cantidad} - Total $ {prod.price * prod.cantidad}
                          <button className="botones material-icons" onClick={()=>borrarUnItem(prod)}>remove</button>
                          <button className="botones material-icons" onClick={()=>sumarUnItem(prod)}>add</button>
                          <button className="botones material-icons" onClick={()=>borrarDelCarrito(prod)}> delete </button>  
                          </h5>
                          </div>
                            </div>
                        </div>
                      );
                    })}
                   </div>
                  
                     <div className="itemCarrito" >
                          
                        <div className="precioFact"><h5 >Precio Total de factura: ${precioTotal}</h5></div>
                        <div className="btns">
                        <button onClick={vaciarCarrito} >Vaciar Carrito</button>
                          <NavLink to="/payment"> 
                        <button >Finalizar compra</button>
                        </NavLink>
                        
                        </div>
                        
                        
                        
                     </div>
                   </div>
              ): 
                <>
                <div className="msj">
                  <h4>Tu carrito esta vacio!! </h4> 
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