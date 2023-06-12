import products from '@/fakeApi/products.json'
import accounts from '@/fakeApi/accounts.json'
import users from '@/fakeApi/users.json'
import ProductCard from './ProductCard'

const App = () => {
  function handleAddToCart(id) {
    console.log(`Agregado al carrito el producto con id ${id}`)
  }

  return (
    <div>
      <div className='flex height-limited'>
        {products.map((producto) => (
          <ProductCard
            key={producto.id}
            product={producto}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <hr />
      <div className='flex height-limited'>
        {accounts.map((cuenta) => (
          <div className='card' key={cuenta.account}>
            <a
              target='_blank'
              rel='noreferrer'
              href={`https://twitter.com/${cuenta.account}`}
            >
              {cuenta.account}
            </a>
          </div>
        ))}
      </div>
      <hr />
      <div className='flex height-limited'>
        {users.map((usuario) => (
          <div className='card' key={usuario.email}>
            <h2>{usuario.apodo}</h2>
            <ul>
              {usuario.mascotas.map((mascota) => (
                <li key={mascota.nombre}>
                  {mascota.nombre} ({mascota.edad}): {mascota.color}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
