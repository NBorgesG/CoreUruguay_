import React from "react";
import ItemCount from "../ItemList/ItemCount";
import { useState } from "react";
import { NavLink} from "react-router-dom";
import { useContexto } from "../../CartContext";

const ItemDetail = ({producto}) => {
    
    const {agregarAlCarrito} = useContexto()

    function onAdd(cantidad) {
      agregarAlCarrito(producto, cantidad);
    }

            return (
              <>
                <h2>PRODUCTO</h2>
                <div className="listaProd2">
                  <div>
                    <h5>{producto.nombre}</h5>
                    <h5>Precio: ${producto.precio}</h5>
                    <h5>{producto.descripcion}</h5>
                    <ItemCount
                      stock={producto.stock}
                      initial={1}
                      onAdd={onAdd}
                    />
                    <NavLink to="/carrito">
                      <button className="botones">Finalizar Compra</button>
                    </NavLink>
                  </div>
                </div>
              </>
            );
            
}

export default ItemDetail 