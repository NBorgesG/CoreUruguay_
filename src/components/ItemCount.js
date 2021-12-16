import React from "react";
import { useState } from "react";


function ItemCount({ stock, initial, onAdd }) {
  
  const [contador, setContador] = useState(initial);

  const [lista, setLista] = useState([]);

  

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
      setLista();
    } else {
      console.log("No hay mas stock");
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      console.log("noooope");
    }
  };

  const agregarCarrito = () => {
    if(contador <= stock){
      setContador(initial);
      onAdd(contador);

    }
   
  };

 

  return (
    <>
      <div>
        <div className="producto">
          <h5 >Producto</h5>
          <h5> Cantidad : {contador}</h5>
          <button onClick={sumar}>Sumar</button>
          <button onClick={restar}>Restar</button>
          <div>
            <button onClick={agregarCarrito}>Agregar a Carrito</button>
          </div>
          
        </div>
      </div>
    </>
  );
}
export default ItemCount;
