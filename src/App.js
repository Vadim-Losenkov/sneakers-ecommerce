import React from 'react';
import Card from './components/Card/index.js';
import Drawer from './components/Drawer.js';
import Header from './components/Header.js';

// import axios from 'axios'

function App() {
  const [sneakers, setSneakers] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [inputValue, setInputValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)
  
  React.useEffect(() => {
    /*
    fetch('https://6147168365467e0017384a49.mockapi.io/sneakers')
        .then(resp => resp.json())
        .then(json => setSneakers(json))
        */
    axios.get('https://6147168365467e0017384a49.mockapi.io/sneakers').then(({json}) => setSneakers(json.data))
    axios.get('https://6147168365467e0017384a49.mockapi.io/cart').then(({json}) => setCartItems(json.data))
  }, [])
  
  const onCartClick = () => {
    setCartOpened(!cartOpened)
  }
  
  const onAddToCart = (obj, isAdded) => {
    setCartItems(prev => [...prev, obj])
    axios.post('https://6147168365467e0017384a49.mockapi.io/cart', obj)
  }
  
  const inputValueOnChange = event => {
    setInputValue(event.target.value)
  }
  
  const onRemoveItem = (id) => {
    axios.delete(`https://6147168365467e0017384a49.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }
  
  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onCart={onCartClick} items={cartItems} onRemove={onRemoveItem}/>}
      <Header onCart={onCartClick} />
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>{inputValue ? inputValue : 'Все кросовки'}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input onChange={inputValueOnChange} value={inputValue} placeholder="поиск..." />
            <img src="/img/btn-remove.svg" className="clear" onClick={setInputValue('')} alt="clear" />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {
            sneakers.filter(item => item.title.toLowerCase().includes(inputValue.toLowerCase()))
            sneakers.map((obj, index) => (
              <Card 
                key={`${obj.name}_${index}`} 
                name={obj.name} 
                imageUrl={obj.imageUrl} 
                price={obj.price} 
                onFavourite={() => console.log('клик на сердечко')} 
                onPlus={(product, isAdded) => onAddToCart(product, isAdded)} 
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App;
