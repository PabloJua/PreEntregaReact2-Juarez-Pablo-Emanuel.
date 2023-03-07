import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import arrayProductos from "./json/productos.json";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams(); /*desestructurar id*/
    /*Efecto de montaje*/

    useEffect (() => {
        const promesa = new Promise((resolve) => {
            /*Retardo de 2 segundos - Emular retrasos de red*/
            setTimeout (() => {
                resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
            }, 2000)
        });
        promesa.then((respuesta) => {
            setItems(respuesta);
        });

    }, [id]);


    return (
        < div className="container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;