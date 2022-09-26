import React from 'react'

const Footer = (props) => {
  return (
    <>
    <footer className="section-footer section">
        <div className="nothing">
        <div className='footer-contact-card'>
            <div className="leftHandSide">
                <h3 className='readyto' style={{color: "white"}}>Ready To get Started</h3>
            </div>
            <div className="rightHandSide">
               <button href="contact" className="btn">GET STARTED</button>
            </div>
        </div>
        </div>
        <div className="container grid grid-four-column mainContainerOfFooter">
            <div className="f-about">
                <h3>About</h3>
                <p>
                    We are BeastPiano
                </p>
            </div>
            <div className="subscribe-input-section">
                <p style={{color: "#fff", fontSize:"2.1rem"}}>Subscribe</p>
                <p style={{color: "#fff", fontSize:"1.3rem"}}>For a cookie !!!</p>
                <br />
                <input style={{
                    border: "2px solid #fff",
                    height: "3rem",
                    width: "auto",
                    paddingLeft: "1rem"
                }} type="text" placeholder='Email' className='subInput'/>
                <br />
                <br />
                <button className="btn2" style={{borderRadius: "2px", padding: "4px 4px"}}>SUBSCRIBE</button> 
            </div>
            <div className="f-services" style={{textTransform: "capitalize"}}>
                <h3>Services</h3>
                <ul>
                    <li>
                        <span>
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </span>web design
                        
                    </li>
                    <li>
                        <span>
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </span>web development
                    </li>
                    <li>
                        <span>
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </span>React Project
                    </li>

                    <li>
                        <span>
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </span>Piano Videos
                    </li>
                </ul>
            </div>
            <div className="f-address">
                <h3>Want to contact</h3>
                <address>
                    <div>
                        <p>
                            <span>
                                <ion-icon name="location-outline"></ion-icon>
                            </span>
                            <a style={{textDecoration:"none", color: "#fff"}} href="https://goo.gl/maps/wcXkuYMajPL68aKC6">Jodhpur, India</a> 
                        </p>
                    </div>

                    <div>
                        <p>
                            <span>
                                <ion-icon name="call-outline"></ion-icon>
                            </span>
                            <a style={{textDecoration:"none", color: "#fff"}} href="tel:+919828931999"> +91 9828931999 </a>
                        </p>
                    </div>

                    <div>
                        <p>
                            <span>
                                <ion-icon name="mail-outline"></ion-icon>
                            </span>
                            <a style={{textDecoration:"none", color: "#fff"}} href="mailto:harshilsharma1111@gmail.com">
                                harshilsharma1111@gmail.com
                            </a>
                        </p>
                    </div>
                </address>
            </div>
        </div>
        <hr style={{marginTop: "5rem"}}/>
        <div className="copyrights" style={{display: "flex", justifyContent: "center", paddingTop: "8rem", fontSize:"1.3rem",color: "azure"}}>
        @2022  Harshil Sharma All rights reserved
            </div>
    </footer>
    </>
  )
}

export default Footer
