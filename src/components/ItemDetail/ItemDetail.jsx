

const ItemDetail = ({product}) => {

const onAdd = (cantidad) =>{
  console.log(cantidad)
}

  return (
    <div className="row">
      <div className="col">
        <img src={product.foto} alt="" />
        <p>Categoria: {product.categoria}</p>
        <p>Precio: {product.precio} </p>
        <p></p>
      </div>
      <div className="col">
        <Contador
          stok={10}
          initial={1}
          onAdd={onAdd}
          />
      </div>
    </div>
  )
}

export default ItemDetail