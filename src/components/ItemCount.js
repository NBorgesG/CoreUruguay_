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
    setContador(1);
  };

  const funcAux = () => {
    agregarCarrito();
    onAdd();
    
  };

  return (
    <>
      
      
      <card>
        <div className="producto">
          <h5 className="card-title">Producto</h5>
          <h5> Cantidad : {contador}</h5>
          <button onClick={sumar}>Sumar</button>
          <button onClick={restar}>Restar</button>
          <div>
            <button onClick={funcAux}>Agregar a Carrito</button>
          </div>
        </div>
      </card>
    </>
  );
}
export default ItemCount;
