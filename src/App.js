import NavBar from "./components/Header/NavBar.js"
import ItemListContainer from "./components/ItemList/ItemListContainer.js"
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer.js"
import Footer from "./components/Footer/Footer.js"



function App () {
    return (
        <>
        
            <NavBar />

            <div className="divCont">
            <ItemListContainer nombre= {"extraño"}/>
            <ItemDetailContainer/>
            </div>
            <Footer/>
         </>
    )
}

export default App