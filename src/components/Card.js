import React from 'react'
import styles from './Card.module.css'

const Card = (props) => {
  return (
    <div>
      <ul className={styles.cards}>
  <li>
    <a href={props.linkTo} className={styles.card}>
      <img src={props.thumbnail} className={styles.card__image} alt="" />
      <div className={styles.card__overlay}>
        <div className={styles.card__header}>
          <svg className={styles.card__arc} xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className={styles.card__thumb} src={props.logoImg} alt="" />
          <div className={styles["header-text"]}>
            <h3 className={styles.card__title}>{props.heading}</h3> 
          </div>
        </div>
        <div className="desc">
            {props.description} 
          </div>
        <p className={styles.card__thumb}>{props.message}</p>
      </div>
    </a>      
  </li>
</ul>
    </div>
  )
}

export default Card
