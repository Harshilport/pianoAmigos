import React from 'react'
import Footer from './Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Special = (props) => {
  return (
    <React.Fragment>
    <div style={{display : "flex", justifyContent: "center", marginBottom: "15rem"}}>
    <div style={{backgroundColor: "white", width: "80%", background: "rgb(0 10 45)", borderRadius: "5rem"}} id={props.id}>
      <h4 id="req" >ANY SPECIAL REQUEST FOR SONGS OR MONTAGES ??</h4>
      <h5 id='moto' style={{display: 'flex', justifyContent: "center", fontSize: "1.4rem", paddingTop: "1rem", textTransform: "uppercase", color: "white"}}>Dont' Be Shy Just Go On</h5>
      <div>
      </div>
      <div className="section-contact-main contact-container">
            <form  action="https://formspree.io/f/xayvpayn" method="POST">
                <div className="grid grid-two-column">
                    <div>
                        <label htmlFor="username"></label>
                        <input type="text" name="username" placeholder="Username" id="username" required
                            autoComplete="off" />
                    </div>
                    <div>
                        <label htmlFor="email"></label>
                        <input type="email" name="email" placeholder="demo@mail.com" id="email" autoComplete="off"
                            required />
                    </div>
                </div>

                <div>
                    <label htmlFor="subject"></label>
                    <input type="text" name="subject" placeholder="subject" id="subject" autoComplete="off" required />
                </div>
                <div>
                    <label htmlFor="textarea"></label>
                    <textarea name="textarea" id="textarea" cols="30" rows="10" autoComplete="off"
                        placeholder="Write your message" required></textarea>
                </div>

                <div style={{paddingBottom: "5rem"}}>
                    <input style={{fontSize: "1rem"}} type="submit" name="submit" id="submit" className="btn btncontact" value="send message" />
                    <Link to={props.tuist} style={{fontSize: "1rem", marginLeft: "2%"}} className="btn">Go Back</Link>
                </div>
            </form>
        </div>
    </div>
    </div>
    <Footer/>
    </React.Fragment>
  )
}

export default Special
