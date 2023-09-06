import { useState } from 'react';
import './ContactPage.css';
import { Button, Form } from 'react-bootstrap';


const ContactPage = () => {

    const [valores, setValores] = useState({
        nombre: "",
        email: "",
        direccion: ""
    });


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleValores = (e) => {
        setValores({
            ...valores,
            [e.target.name]: e.target.value
        })
    }



    return (
        <div className='container content'>
            <h1 className='main-title'>Pagina de Contacto</h1>
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
                    Enviar
                </Button>
            </Form>
        </div>
    )
};

export default ContactPage;