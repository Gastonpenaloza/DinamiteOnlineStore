import Item from "./Item"
import './ItemList.css'

const ItemList = ({ productos }) => {
    return (
        <div>
            <div className="productos">
                { productos.map((prod) => <Item producto={prod} key={prod.id} />) }
            </div>
        </div>
    )
}

export default ItemList