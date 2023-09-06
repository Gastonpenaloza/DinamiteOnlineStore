import Card from 'react-bootstrap/Card';
import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({producto}) => {
    return (
        <Card className="producto">
            <Card.Img variant="top" src={producto.imagen} alt="Foto producto" />
            <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>
                    Precio: ${producto.precio}
                </Card.Text>
                <Link className="ver-mas" to={`/item/${producto.id}`}>Ver Producto</Link>
            </Card.Body>
        </Card>
    )
}

export default Item