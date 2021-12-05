import React from "react"
import CartWidget from "../CartWidget"


const Navbar = (props) => {
    return (
        <div className="row"> <nav>
            <div className="columna col-lg-4">
            
            <h1>Core Uruguay</h1>
            <CartWidget/>
            </div>
            <div className="columna col-lg-4"> </div>
            <div className="columna col-lg-4" > 
            
            
            <a href="/#" className="link">Ingresar/Registrarse</a>
            <a href="/#" className="link">Novedades</a>
            <a href="/#" className="link">Productos</a>
            
            </div></nav>
            

            
        </div>

    )
}


export default Navbar