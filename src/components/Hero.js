import React from 'react'
const Hero = (props) => {
  return (
    <main className='mainarea'>
       <section className="section-hero section" id={props.hero}>
            <div className="container grid grid-two-column">
                <div className="section-hero-data">
                    <p className="hero-top-data">this is me</p>
                    <h1 className="hero-heading">Beast Piano</h1>
                    <p className="hero-para">
                        I'm Harshil Sharma. A Web Developer, Video Editor & youtuber. A Student of class 9 studying in
                        Kendriya Vidyalaya Number 2 Air Foce School.
                    </p>
                    <div>
                        <a href="#contact" className="btn hireme-btn">Hire me</a>
                    </div>
                </div>
                <div className="section-hero-image">
                    <img src={props.img} alt="this is me " className="hero-img" />
                </div>
            </div>
        </section>
    </main>
  )
}

export default Hero
