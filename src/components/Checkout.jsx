import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import "../routes/ContactPage.CSS";
import { Button, Form } from 'react-bootstrap';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import "./Checkout.css";

const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const [valores, setValores] = useState({
        nombre: "",
        email: "",
        direccion: ""
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        const pedido = {
            cliente: valores,
            productos: carrito,
            total: precioTotal()
        }

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })
    }

    const handleValores = (e) => {
        setValores({
            ...valores,
            [e.target.name]: e.target.value
        })
    }

    if (pedidoId) {
        return (
            <div className='container content checkout'>
                <h1 className='main-title'>Muchas gracias por tu compra!</h1>
                <p>Tu número de pedido es: <div className='orderNumber'>{pedidoId}</div></p>
            </div>
        )
    }

    return (
        <div className='container content'>
            <h1 className='main-title'>Ingresa tus datos para terminar de comprar</h1>
            <Form className='formulario' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGridName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu nombre" value={valores.nombre} onChange={handleValores} name="nombre" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa tu Email" value={valores.email} onChange={handleValores} name="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress">
                    <Form.Label>Direción</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu Dirección" value={valores.direccion} onChange={handleValores} name="direccion" />
                </Form.Group>

                <Button variant="secondary" type="submit">
                    Comprar
                </Button>
            </Form>
        </div>
    )
}

export default Checkout