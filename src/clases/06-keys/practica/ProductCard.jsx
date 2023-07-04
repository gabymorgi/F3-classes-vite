function ProductCard({ product, onAddToCart }) {

  function handleClick() {
    onAddToCart(product.id);
  }

  return (
    <div className="card" key={product.id}>
      <h2>{product.nombre}</h2>
      <p>ID: {product.id}</p>
      <p>Precio: {product.precio}</p>
      <p>Descripción: {product.descripcion}</p>
      <button onClick={handleClick}>Agregar al carrito</button>
    </div>
  );
}

export default ProductCard;
