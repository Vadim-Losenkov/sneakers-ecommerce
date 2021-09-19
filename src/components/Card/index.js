import React from 'react';
import styles from './Card.module.scss'

function Card({price, name, imageUrl, onFavourite, onPlus}) {
  const [isAdded, setIsAdded] = React.useState(false)
  const onClickPlus = () => {
    onPlus({name, price, imageUrl})
    setIsAdded(!isAdded)
  }
  
  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavourite}>
        <img src="/img/heart-unliked.svg" alt="component-button" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="component-button" />
      <h5>{name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена: </span>
          <b>{price} руб.</b>
        </div>
        <img className={styles.plus} onClick={onPlus} src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'} alt="component-button" />
      </div>
    </div>
  )
}

export default Card