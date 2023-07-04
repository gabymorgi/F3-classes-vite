import Header from "./components/Header"
import Tag from "./components/Tag"
import "./styles.css"
import Button from "./components/Button"

const Components = () => {
  function handleClick() {
    console.log("click")
  }
  const isMayorDeEdad = false
  return (
    <>{/* React.Fragment */}
      {/** nos permite devolver varios elementos sin envolverlos en un div */}

      <Header />
      {/** todos los atributos se envuelven en el objeto props */}
      {/** el contenido entre las etiquetas se envuelve en props.children */}
      <Tag type="primary" size="sm">Platformer</Tag>
      <Tag type="secondary" size="sm">Roguelike</Tag>
      <Tag type="primary" size="lg">Metroidvania</Tag>
      {/** solo se muestra si isMayorDeEdad es true */}
      {isMayorDeEdad
        ? <Tag type="secondary" size="lg">PewPew</Tag>
        : undefined
      }
      <Button loading={false}>Click me</Button>
      <Button loading={true}>Click me</Button>
      <Button disabled={true}>Click me</Button>
      <Button onClick={handleClick}>Click me</Button>
    </>
  )
}

export default Components
