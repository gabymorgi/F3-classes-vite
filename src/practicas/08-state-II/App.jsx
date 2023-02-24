import { useState } from 'react'
import AccountList from './Components/AccountList'

const usuarios = [
  { id: '1', nombre: 'john', edad: 25, email: 'john@egbert.com' },
  { id: '2', nombre: 'rose', edad: 27, email: 'rose@lalonde.com' },
  { id: '3', nombre: 'dave', edad: 25, email: 'dave@strider.com' },
  { id: '4', nombre: 'jade', edad: 28, email: 'jade@harley.com' },
  { id: '5', nombre: 'karkat', edad: 29, email: 'karkat@vantas.com' },
  { id: '6', nombre: 'tavros', edad: 31, email: 'tavros@nitram.com' },
  { id: '7', nombre: 'sollux', edad: 35, email: 'sollux@captor.com' },
  { id: '8', nombre: 'nepeta', edad: 32, email: 'nepeta@leijon.com' },
  { id: '9', nombre: 'kanaya', edad: 45, email: 'kanaya@maryam.com' },
  {
    id: '10',
    nombre: 'terezi',
    edad: 52,
    email: 'terezi@pyrope.com',
  },
  {
    id: '11',
    nombre: 'tavros',
    edad: 21,
    email: 'vriska@serket.com',
  },
  {
    id: '12',
    nombre: 'equius',
    edad: 18,
    email: 'equius@zahhak.com',
  },
  {
    id: '13',
    nombre: 'gamzee',
    edad: 18,
    email: 'gamzee@makara.com',
  },
  {
    id: '14',
    nombre: 'eridan',
    edad: 32,
    email: 'eridan@ampora.com',
  },
  {
    id: '15',
    nombre: 'feferi',
    edad: 34,
    email: 'feferi@peixes.com',
  },
  {
    id: '16',
    nombre: 'aradia',
    edad: 33,
    email: 'aradia@medigo.com',
  },
]

const App = () => {
  const [followingAccounts, setFollowingAccounts] = useState([])

  function handleFollow(account) {
    if (!followingAccounts.some((followingAccount) => followingAccount.id === account.id)) {
      setFollowingAccounts([...followingAccounts, account])
    }
  }

  function handleUnfollow(account) {
    setFollowingAccounts(followingAccounts.filter((followingAccount) => followingAccount.id !== account.id))
  }

  return (
    <>
      <h1>Follow Accounts</h1>
      {followingAccounts.length > 0 ? (
        <AccountList accounts={followingAccounts} onClick={handleUnfollow} />
      ) : undefined}
      <hr />
      <h1>Suggested Accounts</h1>
      <AccountList accounts={usuarios} onClick={handleFollow} />
    </>
  )
}

export default App

/**
 * que pasa si usamos index como key?
 *
 * <Pedido key={0} pedido="Ham" /> // estado true
 * <Pedido key={1} pedido="ens" /> // estado false
 * <Pedido key={2} pedido="emp" /> // estado true
 * <Pedido key={3} pedido="ham" /> // estado false
 *
 * y eliminamos el tercer elemento
 *
 * <Pedido key={0} pedido="Ham" /> // estado true
 * <Pedido key={1} pedido="ens" /> // estado false
 * <Pedido key={2} pedido="ham" /> // estado true
 *
 * React solo ve las keys. Y piensa que entre un estado y el otro
 * se elimino el componente con key={3}
 * y que el componente con key={2} cambio su prop pedido de emp a ham
 */
/**
 * que pasa si usamos un numero aleatorio como key?
 * asumimos que estadisticamente no se repiten
 * por lo tanto no sucederia lo de arriba
 *
 * <Pedido key={25} pedido="Ham" /> // estado true
 * <Pedido key={32} pedido="ens" /> // estado false
 * <Pedido key={69} pedido="nice" /> // estado true
 * <Pedido key={100} pedido="ham" /> // estado false
 *
 * eliminamos el tercer elemento
 * el estado se modifica, ocurre un nuevo render,
 * por lo tanto, se vuelve a calcular el valor key
 *
 * <Pedido key={10} pedido="Ham" /> // estado false
 * <Pedido key={48} pedido="ens" /> // estado false
 * <Pedido key={79} pedido="ham" /> // estado false
 *
 * React ve que los componentes con key 25, 32, 68 y 100 se eliminaron
 * y que aparecieron nuevos componentes con key 10, 48 y 79
 * por eso se pierde el estado de los componentes que se eliminaron
 * y se resetean los nuevos
 *
 * idealmente, los keys deberian ser unicas e ""intrinsecas"" a cada componente
 */
