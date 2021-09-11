import React from 'react';
import './card.css'

// console.log(stylesCard);

function Card(props) {
  return (
    <div className="card">
      <div className="favorite">
        <img src="public/img/heart-unliked.svg" alt="" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="image" />
      <h5>{props.name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена: </span>
          <b>{props.price} руб.</b>
        </div>
        <button className="button" onClick={props.onClick}>
          <img width={11} height={11} src="public/img/plus.svg" alt="image" />
        </button>
      </div>
    </div>
  )
}

export default Card