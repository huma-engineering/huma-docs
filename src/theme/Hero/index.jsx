import React from 'react';
import styles from './styles.module.css';

const Hero = ({title, description, image}) => {
    return <div className={styles.hero}>
        <img src={`/img/${image}`} alt="" />
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
}

export default Hero;