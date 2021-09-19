import React from 'react';

function Drawer({onCart, items = []}) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between align-center">Корзина <img className="removeCartBtn cu-p" onClick={onCart} src="/img/btn-remove.svg" alt="btn-remove" /></h2>
        <div className="items">
          {/*
            items.map(item => (
              <div className="cartItem d-flex align-center mb-20">
                <div style={{ backgroundImage: `url("${item.imageUrl}")` }} className="cartItemImage"></div>
                <div className="mr-20 flex">
                  <p className="mb-5">
                    {item.title}
                  </p>
                  <b>
                    {item.price}
                  </b>
                </div>
                <img className="removeCartBtn" src="/img/btn-remove.svg" alt="btn-remove" />
              </div>
            ))
          */}
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого: </span>
              <div></div>
              <b>21 489 руб.</b>
            </li>
            <li>
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="arrow"/></button>
        </div>
      </div>
    </div>
  )
}

export default Drawer
