import React from 'react';
import styles from './styles.module.css';

const Button = (props) => {

  const {href, as, children} = props

  const renderButton = () => {
    switch (as) {
      case "button":
        return <button {...props} className={styles.button}>
          {children}
        </button>
      default:
        return <a {...props} href={href} className={styles.button}>
          {children}
        </a>
    }
  }

  return renderButton()
}

export default Button;