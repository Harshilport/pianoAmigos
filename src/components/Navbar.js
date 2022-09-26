import React from 'react'
import { useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Navbar = (props) => {

    const [menu, setMenu] = useState(false);
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();
    return (
        <div>
            <header className={menu === true ? "header active" : "header"}>
                <img src={props.logo} id="nav" alt="our main logo" className="logo" />

                <nav className="navbar">
                    <ul className="navbar-lists" style={{alignItems: "center"}}>
                        <li><Link onClick={() => { setMenu(false) }} to={props.hero} className="navbar-link navbarlink home-link">Home</Link></li>
                        <li>
                            <Link onClick={() => { setMenu(false) }} to={props.about} className="navbar-link navbarlink2 about-link">About</Link>
                        </li>
                        <li>
                            <Link onClick={() => { setMenu(false) }} className="navbar-link navbarlink3 service-link" to={props.services}>Services</Link>
                        </li>
                        {
                            isAuthenticated && <li>
                            <Link style={{color:"lightblue"}} onClick={() => { setMenu(false) }} className="navbar-link navbarlink4 service-link" to={props.specialcontact}>ANY REQUEST</Link>
                        </li>
                        }
                        <li>
                            <Link onClick={() => { setMenu(false) }} className="navbar-link navbarlink5 contact-link" to={props.contact}>Contact</Link>
                        </li>
                            {isAuthenticated && <li>  <p>Welcome  {user.name} !!</p>     </li>}
                        {
                            isAuthenticated && <li>
                                
                                <button className='btn2' onClick={() => logout({ returnTo: window.location.origin })}>
                                    Log Out
                                </button></li>  
                        }
                        {
                            !isAuthenticated && <li><button className='btn2' onClick={() => loginWithRedirect()}>Log In</button></li>
                        }
                    </ul>
                </nav>
                <div className="mobile-navbar-btns" style={{ border : !menu ? "3px solid white" : "3px solid black"}}>
                    <ion-icon name="menu"
                        style={menu === true ? {
                            display: "none",
                             width: "5rem",
                            height: "5rem",
                            color: "black"
                        } : {
                            display: "block", width: "5rem",
                            height: "5rem",
                            color: "white"
                        }}
                        className="mobile-nav-icon" onClick={() => {
                            setMenu(true)
                        }}></ion-icon>
                    <ion-icon name="close" onClick={() => {
                        setMenu(false)
                    }} className="mcon2d" style={menu === false ? {
                        display: "none",
                        width: "5rem",
                        height: "5rem",
                        color: "black"
                    } : {
                        width: "5rem",
                        height: "5rem",
                        color: "black"
                    }}
                    ></ion-icon>
                </div>
            </header>
        </div>
    )
}

export default Navbar
