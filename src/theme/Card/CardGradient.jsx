import React from 'react';
import styles from './styles.module.css';
import Button from "@site/src/components/Button"

export const CardGradient = ({ title, description, icon, links = [], button }) => {
  return <div className={styles.cardGradient}>
    <div className={styles.cardGradientInner}>
      <div>
        <div className={styles.cardGradientIcon}><img src={`/img/${icon}`} alt="" /></div>
        <h1>{title}</h1>
        <p>{description}</p>
        <ul>
          {links.map((item, i) => (
            <li key={`cgl-${i}`}><a href={item.href}>{item.label}</a></li>
          ))}
        </ul>
      </div>
      {button && <div className={styles.cardGradientButton}><Button href={button.href}>{button.name}</Button></div>}
    </div>
  </div >
}