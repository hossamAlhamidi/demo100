import React, { Component } from 'react'
import "./css/styles.css"
import "./fontawesome-free-5.15.3-web/css/all.min.css"
import Navbar from "./components/navbar.js"
import Header from "./components/header"
import Portfolio from './components/portfolio'
import About from "./components/about"
import Contact from "./components/contact"
import Head from "./components/head"
import Footer from "./components/footer"
import Copyright from "./components/copyright"
export default class App extends Component {
  render() {
    return (
      <div>
             <Head/>
          <body id="page-top">
      
        <Navbar/>
      
        <Header/>
       
       <Portfolio/>
      
        <About/>
        
        <Contact/>
         <Footer/>
        
        <Copyright/>
        
       </body>
      </div>
    )
  }
}
