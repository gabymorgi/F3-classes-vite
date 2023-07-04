import sburbImage from '@/assets/sburb.svg'

const Header = () => {
  return (
    <header>
      <h1>My App</h1>
      {/** el path / apunta a la carpeta public */}
      <img src="/sburb.svg" width="50px" height="50px" alt='Sburb' />
      {/** podemos importar imágenes y ponerlas en el src */}
      <img src={sburbImage} width="50px" height="50px" alt='Sburb' />
    </header>
  )
}

export default Header
