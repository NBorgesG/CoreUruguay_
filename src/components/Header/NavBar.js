import React from "react"
import CartWidget from "./CartWidget"
import { Link, NavLink } from "react-router-dom"


const Navbar = ({links}) => {
    
    return (
        <header> 
            <div id="brand"> 
            <Link to="/" >
                <h1>Core Uruguay</h1>
                <span className="material-icons">
                filter_vintage
                </span>
                    </Link>  
            </div>

            <nav>
            {links.map((link)=>{
                return <NavLink key={link.id} to={link.href}>{link.nombre}</NavLink>
            })} 

            <NavLink to="/carrito"><CartWidget/></NavLink>

            </nav>
            
        </header>

    )
}


export default Navbar