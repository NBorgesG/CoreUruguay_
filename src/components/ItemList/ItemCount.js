import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function ItemCount({ stock, initial, onAdd }) {
  
  const [contador, setContador] = useState(initial);

  const [lista, setLista] = useState([]);

  const notify = () => toast("Producto agregado al carrito con exito !");

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
      setLista();
    } else {
      console.log("no hay mas stock del producto");
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
      notify()

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
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
        </div>
      </div>
    </>
  );
}
export default ItemCount;
