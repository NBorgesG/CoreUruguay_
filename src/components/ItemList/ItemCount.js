import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";



function ItemCount({ stock, initial, onAdd }) {
  
  const [contador, setContador] = useState(initial);

  const [lista, setLista] = useState([]);

  

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
      setLista();
    } 
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const agregarCarrito = () => {
    if(contador <= stock){
      setContador(initial);
      onAdd(contador);
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Producto agregado al carrito con exito',
        showConfirmButton: false,
        timer: 1500
      })
    }
   
  };

 
 

  return (
    <>
      <div>
        <div className="producto">
          
          <h5> Cantidad : {contador}</h5>
          <button onClick={sumar} className="botones">Sumar</button>
          <button onClick={restar} className="botones">Restar</button>
          <div>
            <button onClick={agregarCarrito} className="botones">Agregar a Carrito</button>
          </div>
          
        </div>
      </div>
    </>
  );
}
export default ItemCount;
