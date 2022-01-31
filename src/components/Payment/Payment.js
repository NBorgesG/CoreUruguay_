import React from "react";
import { collection } from "firebase/firestore";
import { bd } from "../../firebase";
import { addDoc,  serverTimestamp } from "firebase/firestore";
import { useContexto } from "../../CartContext";
import { useState } from "react";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";


const Payment = () =>{

    const {carrito, vaciarCarrito, precioTotal} = useContexto() ;
    
    
    const [comprador, setComprador] = useState({
        nombre:"",
        apellido:"",
        email:""
    })
    
    const infoComprador = (e) => {
        setComprador({...comprador, [e.target.name]: e.target.value});
    };

    const finalizarCompra = () =>{

        const orden = {            
                comprador : comprador,
                items : {...carrito},
                fecha : serverTimestamp(),
                total: precioTotal
            }

        const collecionPedidos = collection(bd, "pedidos")
  
        addDoc(collecionPedidos, orden).then(({ id }) =>{
              Swal.fire({
              position: 'top-center',
              icon: 'success',
              text: `Su numero de orden es ${id}, 
              Le llegara un mail con el detalle de su compra, 
              Muchas gracias por elegirnos` ,
              showConfirmButton: false,
              timer: 3500
            })
            vaciarCarrito()
          
        });
        setComprador({nombre:"", apellido:"", email:""})
        
      }
    
       
    return(

        <>
        <div className="divPrinForm">
        <div className="divForm">
            <h3>Por favor, complete sus datos para seguir con el proceso de compra</h3>
            <form >
                <div><label >Ingrese su nombre <input type="text" placeholder="Nombre" name="nombre" value={comprador.nombre} onChange={infoComprador} required/></label></div>
                <div><label >Ingrese su apellido<input type="text" placeholder="Apellido" name="apellido" value={comprador.apellido} onChange={infoComprador} required/></label></div>
                <div><label >Ingrese su Email <input type="email" placeholder="Email"name="email" value={comprador.email} onChange={infoComprador} required/></label></div>
                
                <div><NavLink to="/productos"><button type="submit" onClick={finalizarCompra} disabled={!(
                comprador.nombre &&
                comprador.apellido &&
                comprador.email)
            }>Finalizar Compra</button></NavLink>
                    
                    </div>
                
            </form>
            </div> 
        </div>
        
        </>

    )
    

}

export default Payment