import React from 'react';
import Card from './components/Card/index.js';
import Drawer from './components/Drawer.js';
import Header from './components/Header.js';

import axios from 'axios'

function App() {
  const [sneakers, setSneakers] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)
  
  const onCartClick = () => {
    setCartOpened(!cartOpened)
  }
  
  const onAddToCart = (obj) => {
    setCartItems([...cartItems, obj])
  }
  
  React.useEffect(() => {
    /*
    fetch('https://6147168365467e0017384a49.mockapi.io/sneakers')
        .then(resp => resp.json())
        .then(json => setSneakers(json))
        
    */
    axios.get('https://6147168365467e0017384a49.mockapi.io/sneakers').then(json => setSneakers(json))
  }, [])
  
  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onCart={onCartClick} items={cartItems} />}
      <Header onCart={onCartClick} />
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кросовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {
            sneakers.map((obj, index) => (
              <Card 
                key={`${obj.name}_${index}`} 
                name={obj.name} 
                imageUrl={obj.imageUrl} 
                price={obj.price} 
                onFavourite={() => console.log('клик на сердечко')} 
                onPlus={(product) => onAddToCart(product)} 
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App;
