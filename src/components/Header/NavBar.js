import React from "react"
import CartWidget from "./CartWidget"
import { Link, NavLink } from "react-router-dom"


const Navbar = ({links}) => {
    
    return (
        <header> 
            
            <div id="brand" className="header"> 
            <Link to="/" className="links2">
                <h1 className="links">Core Uruguay <span className="material-icons links">
                filter_vintage
                </span></h1>
               
                
                    </Link>  
            </div>

            <nav>
            {links.map((link)=>{
                return <NavLink key={link.id} to={link.href} className="links2">{link.nombre}</NavLink>
            })} 

            <NavLink to="/carrito"><CartWidget/></NavLink>

            </nav>
            
            
            
        </header>

    )
}


export default Navbar