import React from 'react'
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div className='container content'>
      <div className='container-home'>
        <div className='main-text-home'>
          <h1 className='main-title'>
            Bievenido a Dinamite
          </h1>
          <h3 className='main-subtitle'>
            La mejor tienda virtual de ropa
          </h3>
          <Link to="/Productos" className='button-verProductos'>Ver Productos</Link>
        </div>
        <div className='image-home'>
          <img src="https://i.postimg.cc/fyKDjs04/Remeratrainspotting.jpg" alt="foto-remera" />
        </div>
      </div>
    </div>
  )
}


library.add(faCartShopping);

export default App;
