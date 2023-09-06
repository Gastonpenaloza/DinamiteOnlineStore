import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import ItemList from '../components/ItemList'
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from "../firebase/config";


const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("Productos");
    const categoria = useParams().categoria;

    useEffect(() => {

        const productosRef = collection(db, "productos");

        const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;

        getDocs(q)
            .then((resp) => {
                setProductos(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )
            })

    }, [categoria])
    

    return (
            <div className="container content">
                <h1 className='main-title'>{titulo}</h1>
                <ItemList productos={productos} /> 
            </div>
    )
};

export default ItemListContainer;
