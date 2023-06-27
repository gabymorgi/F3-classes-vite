function JSX() {
  // dentro de un componente podemos escribir JS como siempre
  const isMateOk = 1 + 1 === 2
  function handleClick() {
    console.log('click')
  }

  // pero dentro del return solo podemos escribir expresiones
  // no podemos escribir flujos de control como if, for, while, etc
  // por lo que no podemos hacer esto:
  const char = 'a'
  let optionalJSX
  if (char === 'a') {
    optionalJSX = <p>Es una a</p>
  } else {
    optionalJSX = <p>No es una a</p>
  } // ver donde se usa abajo


  // con JSX podemos escribir HTML dentro de JS :D
  return (
    <div>
      <h1>My App</h1>
      {/**el atributo className reemplaza a class */}
      <p className="paragraph-class">Some content</p>
      {/*podemos mandar funciones como atributos*/}
      {/**los atributos en JSX se escriben en camelCase */}
      <button onClick={handleClick}>Click</button>
      {/*podemos escribir JS dentro de JSX*/}
      {32 + 32}
      {/*podemos invocar funciones que retornen JSX*/}
      {Title()}
      {/*podemos utilizar funciones como componentes (deben empezar con mayusculas)*/}
      <Title />
      {/*podemos pasar props*/}
      <Paragraph text='Some content' />
      {/** todos los atributos se envuelven en el objeto props */}
      <Paragraph text='Some content' className="some-class" />
      {/*podemos pasar children*/}
      <Button>Soy un children</Button>
      {/*podemos pasar funciones como props (fijarse en que no se invoca, solo se usa la referencia)*/}
      <Button onClick={handleClick}>Click me</Button>
      {/*podemos pasar children complejos*/}
      <Button><span>estoy en un children span</span></Button>
      {/* podemos hacer render condicionales */}
      {isMateOk ? <span>yes it is</span> : <p>Las mates estan mal</p>}
      {optionalJSX}
    </div>
  )
}

function Title() {
  // Un componente simple que retorna un elemento h1
  return <h1>My App</h1>
}

function Paragraph(props) {
  // Un componente que acepta props y utiliza className y text en un párrafo
  return <p className={props.className}>{props.text}</p>
}

function Button(props) {
  // Un componente que acepta un onClick handler y children como props
  // children es un atributo especial que contiene los elementos hijos (lo que está entre las etiquetas)
  return <button onClick={props.onClick}>{props.children}</button>
}

export default JSX
