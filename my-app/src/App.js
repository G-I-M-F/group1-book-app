import React from "react"
import Nav from "./components/nav"
import Hero from "./components/hero"
import Header from "./components/header"
import Journey from "./components/journey"
import Product from "./components/product"
import Comingsoon from "./components/comingsoon"
import Connect from "./components/Connect"
import Footer from "./components/footer"
import "./App.css"




const App = ()=>{
  return(
    <div>
      <header>
        <Nav/>
      </header> 
      <main>
        <Hero/>
        <Header/>
        <Journey/>
        <Product/>
        <Comingsoon/>
        <Connect/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App