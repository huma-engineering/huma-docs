import React from 'react';
import styles from './styles.module.css';

const Image = ({ borderRadius, borderWidth, isBorder, width, isLink, src, ...props }) => {

  const renderImage = () => {
    return <img
      {...props}
      src={src}
      className={`
        ${styles.img} 
        ${isBorder ? styles.imgBorder : ""}`
      }
      style={{
        width: width ? width : "100%",
        borderRadius: borderRadius ? borderRadius : 0,
        borderWidth: borderWidth ? borderWidth : "1px",
      }}
    />
  }

  return isLink ?
    <a href={src} target="_blank">
      {renderImage()}
    </a>
    :
    renderImage()
}

export default Image