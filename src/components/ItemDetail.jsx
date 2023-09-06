import { useContext, useState } from "react";
import ItemCount from "./ItemCount"
import "./ItemDetail.css"
import { CartContext } from "../context/CartContext";


const ItemDetail = ({ item }) => {

    const { carrito, agregarAlCarrito } = useContext(CartContext);

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        setCantidad(cantidad + 1)
    }



    return (
        <div className="container">
            <div className="product-detail">
                <img src={item.imagen} alt={item.nombre} />
                <div className="product-info">
                    <h3 className="title">{item.nombre}</h3>
                    <p>{item.descripcion}</p>
                    <p>Categoria: {item.categoria}</p>
                    <p className="price">Precio: ${item.precio}</p>
                    <ItemCount
                        cantidad={cantidad}
                        handleRestar={handleRestar}
                        handleSumar={handleSumar}
                        handleAgregar={() => { agregarAlCarrito(item, cantidad) }}
                    />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail