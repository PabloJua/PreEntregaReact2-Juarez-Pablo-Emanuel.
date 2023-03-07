import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-end">
          <img src={item.imagen} alt={item.nombre} style={{ height: "270px" }} />
        </div>
        <div className="col d-flex align-items-center">
          <div>
            <h1>{item.nombre}</h1>
            <h5>$ {item.precio}</h5>
            <p>{item.descripcion}</p>
            <ItemCount stock={item.stock}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail