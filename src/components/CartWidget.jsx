import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {

    const { numeroCarrito } = useContext(CartContext);
return (
    <div className='cartNumber'>{ numeroCarrito() }</div>
  )
}

export default CartWidget