import styles from './header.module.css'
// para que los estilos solo apliquen a este componente,
// los definimos en un archivo con la extension .module.css
// y los importamos como un objeto (le pusimos el nombre styles)
const Header = () => {
  return (
    <header>
      {/*para usar los estilos, usamos la sintaxis styles.nombreDeLaClase*/}
      <h1 className={styles.title}>My App</h1>
      <img src="/sburb.svg" width="50px" height="50px" alt='Sburb' />
    </header>
  )
}

export default Header
