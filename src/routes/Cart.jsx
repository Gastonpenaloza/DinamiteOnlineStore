import { useContext } from 'react';
import './Cart.css'
import { CartContext } from '../context/CartContext';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <div className='container content'>
            <h1 className='main-title'>Carrito de Compra</h1>

            {
                carrito.map((prod) => (
                    <div key={prod.id}>
                        <h3>{prod.nombre}</h3>
                        <p>Precio Unit: ${prod.precio}</p>
                        <p>Precio Total: ${prod.precio * prod.cantidad}</p>
                        <p>Cant: {prod.cantidad}</p>
                    </div>
                ))
            }
            {carrito.length > 0 ?
                <>
                    <h2>Precio Total: ${precioTotal()}</h2>
                    <Button className='emptyCartButton' variant='secondary' onClick={handleVaciar}>Vaciar Carrito</Button>
                    <Link className="endBuyButton" to="/Checkout">Finalizar compra</Link>

                </> :
                <h4 className='emptyCartText'>Todavia no tienes productos agregados al Carrito.</h4>
            }


        </div>


    )
};

export default Cart;