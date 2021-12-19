import React from "react"
import CartWidget from "./CartWidget"


const Navbar = (props) => {
    return (
        <div className="row"> <nav>
            <div className="col-lg-4">
            
            <h1>Core Uruguay</h1>
            <CartWidget/>
            </div>
            <div className="col-lg-4 links"> 
                <a href="/#" className="link">Ingresar/Registrarse</a>
                <a href="/#" className="link">Novedades</a>
                <a href="/#" className="link">Productos</a></div>
            </nav>
            

            
        </div>

    )
}


export default Navbar