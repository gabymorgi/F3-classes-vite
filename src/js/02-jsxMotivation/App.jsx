function Title() {
  return <h1>My App</h1>
}

function Paragraph(props) {
  return <p className={props.className}>{props.text}</p>
}

function Button(props) {
  // children es un atributo especial que contiene los elementos hijos (lo que está entre las etiquetas)
  return <button onClick={props.onClick}>{props.children}</button>
}

function JSX() {
  const isMateOk = 1 + 1 === 2
  function handleClick() {
    console.log('click')
  }
  // con JSX podemos escribir HTML dentro de JS :D
  return (
    <div>
      <h1>My App</h1>
      {/**el atributo className reemplaza a class */}
      <p className="paragraph-class">Some content</p>
      {/*podemos escribir JS dentro de JSX*/}
      {32 + 32}
      {/*podemos invocar funciones que retornen JSX*/}
      {Title()}
      {/*podemos mandar funciones como atributos*/}
      {/**los atributos en JSX se escriben en camelCase */}
      <button onClick={handleClick}>Click</button>
      {/*podemos utilizar funciones como componentes (deben empezar con mayusculas)*/}
      <Title />
      {/*podemos pasar props*/}
      <Paragraph text='Some content' />
      {/** todos los atributos se envuelven en el objeto props */}
      <Paragraph text='Some content' className="some-class" />
      {/*podemos pasar children*/}
      <Button onClick={handleClick}>Click me</Button>
      {/*podemos pasar children complejos*/}
      <Button><span>estoy en un span</span></Button>
      {/* podemos hacer render condicionales */}
      {isMateOk ? <span>yes it is</span> : <p>Las mates estan mal</p>}
    </div>
  )
}

export default JSX
