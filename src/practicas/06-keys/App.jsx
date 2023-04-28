import products from '../../fakeApi/products.json'
import accounts from '../../fakeApi/accounts.json'
import users from '../../fakeApi/users.json'

const App = () => {
  return (
    <div>
      <div className="flex height-limited">
        {products.map(producto => (
          <div className="card" key={producto.id}>
            <h2>{producto.nombre}</h2>
            <p>ID: {producto.id}</p>
            <p>Precio: {producto.precio}</p>
            <p>Descripción: {producto.descripcion}</p>
          </div>
        ))}
      </div>
      <hr />
      <div className="flex height-limited">
        {accounts.map(cuenta => (
          <div className="card" key={cuenta.account}>
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://twitter.com/${cuenta.account}`}
            >
              {cuenta.account}
            </a>
          </div>
        ))}
      </div>
      <hr />
      <div className="flex height-limited">
        {users.map(usuario => (
          <div className="card" key={usuario.email}>
            <h2>{usuario.apodo}</h2>
            <ul>
              {usuario.mascotas.map(mascota => (
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
