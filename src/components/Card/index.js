import React from 'react';
import styles from './Card.module.scss'

console.log(styles);

function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false)
  const onClickPlus = () => {
    setIsAdded(!isAdded)
  }
  
  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={props.onFavourite}>
        <img src="/img/heart-unliked.svg" alt="component-button" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="component-button" />
      <h5>{props.name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена: </span>
          <b>{props.price} руб.</b>
        </div>
        <img className={styles.plus} onClick={onClickPlus} src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'} alt="component-button" />
      </div>
    </div>
  )
}

export default Card