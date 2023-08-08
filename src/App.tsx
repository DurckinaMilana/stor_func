import { useState } from 'react'
import './App.css'
import ShopItemClass from './components/ShopItemClass'
import { ShopItemFunc } from './components/ShopItemFunc'
import IProduct from './interface/IProduct'

function App() {
  const [getClass, setGetClass] = useState<boolean>(false)

  const item: IProduct = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
  }

  return (
    <div className="container">
        <div className="background-element"></div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <button
          onClick={() => setGetClass(toggle => !toggle)}
          style={getClass ? {backgroundColor: 'red'} : {backgroundColor: 'yellow', color: 'black'}}
        >
          {
            getClass ? 'get FC' : 'get Class'
          }
        </button>
        {
          getClass ? <ShopItemClass item={item} /> : <ShopItemFunc item={item} />
        }
      </div>
    </div>
  )
}

export default App
