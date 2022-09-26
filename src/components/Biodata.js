import React from 'react'
import styles from './Biodata.module.css'
import heroimage from './hero-min-compressed.webp'

const Biodata = (props) => {
    return (
        <div className={styles.bigObj}>
            <div className={styles.object}>
                <div className={styles.leftside}>
                    <img src={heroimage} className={styles.img} />
                </div>
                <div className={styles.rightside}>
                    <div className={styles.head}>
                        <div className={styles.title}>
                            <h3>About Me</h3>
                        </div>
                        <br />
                        <br />
                        <div className={styles.description}><p>
                            Hello everyone, my name is Harshil Sharma . I live in Jodhpur, Rajasthan. I am a student of class 9 studying in Kendriya Vidyalaya Number 2 Air Foce School. I am a Web Devloper and also a youtuber. I have learned many Coding Languages like Java, React Js, HTML & CSS. I also play Piano on my youtube channel Beast Piano. Although I study in class 9 I know many usefull life skills like coding, sports, music video  editing etc.</p>
                            </div>
                    </div>
                    <br />
                    <br />
                    <div className={styles.whatDoIKnow}>
                        <h3 style={{color: "white"}}>What Do I Know ?</h3>  
                        <br />
                        <br />
                        <br />
                        <div className={styles.god}>
                        <div className={styles.knowsmore}><h3>React</h3></div>
                        <div className={styles.gridTwoColumn}>
                        <div className={styles.knows}><h3 id='lang'>HTML</h3></div>
                        <div className={styles.knows}><h3 id='lang'>CSS</h3></div>
                        <div className={styles.knows}><h3 id='lang'>JAVA</h3></div>
                        <div className={styles.knows}><h3 id='lang'>JavaScript</h3></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Biodata
