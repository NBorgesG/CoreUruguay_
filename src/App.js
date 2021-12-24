import NavBar from "./components/Header/NavBar.js"
import ItemListContainer from "./components/ItemList/ItemListContainer.js"
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer.js"
import Footer from "./components/Footer/Footer.js"
import Carrito from "./components/Header/Carrito.js"
import {BrowserRouter, Route, Routes } from "react-router-dom"




function App () {

    const links = [
        { href: "/productos", nombre: "Productos", id: 5 },
        { href: "/categoria/1", nombre: "Bases", id: 1 },
        { href: "/categoria/2", nombre: "Labiales", id: 2 },
        { href: "/novedades", nombre: "Novedades", id: 3 },
        { href: "/ingresar", nombre: "Ingresar/Registrarte", id: 4 }
    ]
    return (
        <BrowserRouter>
            <NavBar links={links}/>
            <main>
                <Routes>
                
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/carrito" element={<Carrito/>}/>
                <Route path="/productos" element={<ItemListContainer/>}/>
                <Route path="/categoria/:id" element={<ItemListContainer/>}/>
                <Route path="/productos/:id" element={<ItemDetailContainer/>}/>
                
                </Routes>
            </main>
            
            <Footer/>
         </BrowserRouter>
    )
}

export default App