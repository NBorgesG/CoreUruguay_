import React from "react"
import CartWidget from "./CartWidget"
import { Link, NavLink } from "react-router-dom"


const Navbar = ({links}) => {
    
    return (
        <header> 
            
            <div id="brand" className="header links"> 
            <Link to="/" className="links2 links">
                <h1 className="links">CORE URUGUAY <span className="material-icons links">
                
                </span></h1>
               
                
                    </Link>  
            </div>

            <div><nav>
            {links.map((link)=>{
                return <NavLink key={link.id} to={link.href} className="links2">{link.nombre}</NavLink>
            })} 

            <NavLink to="/carrito"><CartWidget/></NavLink>

            </nav></div>
            
            
            
            
        </header>

    )
}


export default Navbar