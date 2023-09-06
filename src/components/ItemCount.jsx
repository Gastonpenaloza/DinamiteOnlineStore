import './ItemCount.css';
import Button from 'react-bootstrap/Button';

const ItemCount = ({ cantidad, handleRestar, handleSumar, handleAgregar }) => {
    


    return (
        <div className="Item-count_container">
            <div className="Item-count">
                <Button variant="secondary" onClick={handleRestar}>-</Button>
                <p>{ cantidad }</p>
                <Button variant="secondary" onClick={handleSumar}>+</Button>
            </div>
            <Button className="button-add" variant="secondary" onClick={handleAgregar}>Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount;