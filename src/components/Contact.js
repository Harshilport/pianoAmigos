import React from 'react'

const Contact = (props) => {
  return (
    <div style={{backgroundColor: "white"}} id={props.contactId}>
      <h4 style={{display: 'flex', justifyContent: "center", fontSize: "2.8rem", paddingTop: "7rem", textTransform: "uppercase"}}>Contact Us</h4>
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
                    <input type="submit" name="submit" id="submit" className="btn btncontact" value="send message" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact
