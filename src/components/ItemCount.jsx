import { useEffect, useState } from "react"

const ItemCount = ({stock}) => {
    /*Contador Boton*/
    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    
    const incrementarStock = () => {
        if (items < itemStock) {
            setItems (items + 1);
        }
    }
    
    const decrementarStock = () => {
        if (items > 1) {
        setItems (items - 1);
        }
    }

    const onAdd = () => {
        if (itemStock >= items) {
            setItemStock (itemStock - items);
            setItems(1);
            console.log("Agregaste: " + items + " Productos al Carrito!");   
        }
    }

    useEffect(() =>{
        setItemStock(stock);
    },[stock])

    return (
        <div className="container text-center">
            <div className="row my-1">
                <div className="col">
                    <div className="btn-group">
                        <button type="button" className="btn bg-info-subtle" onClick={decrementarStock}>-</button>
                        <button type="button" className="btn bg-info-subtle">{items}</button>
                        <button type="button" className="btn bg-info-subtle" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col">
                    <button className="btn bg-info-subtle" onClick={onAdd}>Agregar al Carrito</button>
                </div>
            </div>
        </div>

    )
}

export default ItemCount