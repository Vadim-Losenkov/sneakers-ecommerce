import React from 'react';
import Card from './components/Card/index.js';
import Drawer from './components/Drawer.js';
import Header from './components/Header.js';

const arr = [
  {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: '/img/sneakers/1.jpg'},
  {name: 'Мужские Кроссовки Nike Air Max 270', price: 15600, imageUrl: '/img/sneakers/2.jpg'},
  {name: 'Мужские Кроссовки Nike Air Max 270', price: 14000, imageUrl: '/img/sneakers/3.jpg'},
  {name: 'Мужские Кроссовки Nike Air Max 270', price: 18999, imageUrl: '/img/sneakers/4.jpg'},
]

function App() {
  const [cartOpened, setCartOpened] = React.useState(false)
  const onCartClick = () => {
    setCartOpened(!cartOpened)
  }
  
  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onCart={() => setCartOpened(!cartOpened)} />}
      <Header onCart={() => setCartOpened(!cartOpened)} />
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кросовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="поиск..." />
          </div>
        </div>
        <div className="d-flex">
          {
            arr.map((obj, index) => (
              <Card 
                key={`${obj.name}_${index}`} 
                name={obj.name} 
                imageUrl={obj.imageUrl} 
                price={obj.price} 
                onFavourite={() => console.log('клик на сердечко')} 
                onPlus={() => console.log('клик на плюс')} 
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App;
