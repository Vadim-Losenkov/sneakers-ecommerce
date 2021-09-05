import React from 'react';

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="public/img/logo.png"/>
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кросовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="public/img/cart.svg"/>
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="public/img/user.svg"/>
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Все кросовки</h1>
        <div class="d-flex">
          <div class="card mr-30">
            <img width={133} height={112} src="public/img/sneakers/1.jpg" alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="public/img/plus.svg" alt="" />
              </button>
            </div>
          </div>
          <div class="card mr-30">
            <img width={133} height={112} src="public/img/sneakers/2.jpg" alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="public/img/plus.svg" alt="" />
              </button>
            </div>
          </div>
          <div class="card mr-30">
            <img width={133} height={112} src="public/img/sneakers/3.jpg" alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="public/img/plus.svg" alt="" />
              </button>
            </div>
          </div>
          <div class="card">
            <img width={133} height={112} src="public/img/sneakers/4.jpg" alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="public/img/plus.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
