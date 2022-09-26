import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Hero from './components/Hero'
import logo from './components/logo-compressed.webp'
import herimg from './components/laptop.png'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Biodata from './components/Biodata'
import Special from './components/Special'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import REamainder from './components/REamainder'

const App = () => {
  return (
    <div className='cursor' style={{backgroundColor: "white"}}>
      
      <Router>
      <Switch>
      <Route path="/special">
        <div style={{marginTop: "8rem"}}>
          <h2 style={{display: "flex",justifyContent: "center", fontSize: "3.4rem", marginBottom: "4rem"}}>Welcome</h2>
      <Special tuist="/"/>
        </div>
      </Route>
      <Route path='/'>
      <Navbar logo={logo} hero="/" about="#about" services="#services" contact="#contact" specialcontact="/special"/>
      <Hero img={herimg} hero="hero" />
      <Biodata/>
      <Services serviceId="services" />
      <REamainder/>
      <Contact contactId="contact" />
      <Footer contact="contact" />
      </Route>
      </Switch>
      </Router>
      
    </div>
  )
}

export default App;