import React from "react"
import { useContexto } from "../../CartContext"



const CartWidget = () =>{
    const { cantidadTotal } = useContexto()
    
    return (<>
    <span className="material-icons links2 links">
        shopping_cart
        
        </span>
        {cantidadTotal}
        
    </>
        
        )
}



export default CartWidget