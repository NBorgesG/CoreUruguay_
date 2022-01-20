import React from "react";
import { useContexto } from "../../CartContext";
import { Link } from "react-router-dom";
import { bd } from "../../firebase";
import { addDoc, collection, updateDoc, serverTimestamp } from "firebase/firestore";


const Carrito = () => {

    const {carrito, borrarDelCarrito, vaciarCarrito, precioTotal} = useContexto() ;

    const finalizarCompra = () =>{
      const collecionPedidos = collection(bd, "pedidos")

      addDoc(collecionPedidos,{
        comprador : {
              nombre: "Maria", 
              apellido: "Rodriguez",
              mail: "mariaR@gmail.com"
        }, 
        items: carrito,
        fecha : serverTimestamp(),
        total: precioTotal

      })
      .then((resultado) =>{
        vaciarCarrito()
      })
    }
   
    
        return (
            <> 
            <div className="container">
            
                {carrito.length > 0 ? (
                  <>
                  <ul>
                    {carrito.map((prod) => {
                        return (
                          <div>
                            <div><li> {prod.title} - Precio unitario $ {prod.price} - cantidad {prod.cantidad} - precio total $ {prod.price * prod.cantidad}
                            <button className="botones " onClick={()=>borrarDelCarrito(prod.id, prod.cantidad, prod.price)}>Borrar item del carrito</button></li>

                              
                              </div>
                          </div>
                        );
                      })}
                      
                     </ul>
                     <div >
                          <div className="boton"><button onClick={vaciarCarrito}>Vaciar Carrito</button></div>
                        
                        <h4 className="msj precio">Precio Total de factura: ${precioTotal}</h4>
                        <div className="boton"><button onClick={finalizarCompra}>Finalizar compra</button></div>
                        
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