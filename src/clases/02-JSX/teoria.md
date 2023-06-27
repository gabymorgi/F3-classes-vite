# Teoria clase 2!

En esta clase vamos a aprender sobre JSX, que es una extension de javascript que nos permite escribir codigo html dentro de nuestros archivos javascript. Esto nos va a permitir crear componentes de una forma mas sencilla y legible.

recuerda que a partir de ahora, la extension de los archivos que vamos a usar es `.jsx`

Mira en el archivo App.jsx como se usa JSX

- Identifica que la diferencia entre una funcion y un componente es que el componente debe comenzar con mayuscula, y retornar un elemento JSX. Por lo demas, es igual a una funcion.

- Observa como podemos escribir cualquier codigo javascript dentro de los componentes, incluso podemos asignar HTML a una variable y luego usarla dentro del componente.

- Recuerda que, tecnicamente, NO estamos escribiendo HTML, sino JSX. Pero la idea es que sea muy similar a HTML, por lo que no deberias tener problemas en entenderlo.

- Las etiquetas pueden recibir todos los atributos que ya conoces de HTML. Pero hay algunas diferencia:

  - El atributo `class` queda deprecado, utilizaremos siempre `className`
  
  - Los atributos se escriben en camelCase, por ejemplo `onclick` se escribe `onClick`

  - Los atributos que reciben valores que **no** son strings, deben ir entre llaves `{}`. Esto incluye funciones

    - Fijate que las funciones no tienen parentesis, ya que no queremos ejecutarlas, sino pasar las referencias.

- Descubre como podemos escribir entre llaves `{}` cualquier expresion de javascript dentro de JSX, por ejemplo, podemos escribir `2+2` o `Math.random()` o `miFuncion()`

- Visualiza como podemos usar los componentes dentro de otros componentes, como si fueran etiquetas HTML, usando la sintaxis `<MiComponente />`

- Registra como podemos utilizar el operador ternario para mostrar un componente u otro, dependiendo de una condicion
  
  - Esto se llama renderizado condicional, y es una de las formas mas comunes de mostrar u ocultar elementos en React

  - Inspecciona en el navegador como se renderiza el componente dependiendo de la condicion

- Examina como podemos pasar atributos a los componentes, y como podemos acceder a ellos desde el componente

  - Fijate que los atributos se reciben como un objeto, y que podemos acceder a ellos como si fuera un objeto normal

  - A estos atributos les llamaremos `props`, y son la forma en que los componentes reciben informacion del exterior

  - La informacion fluye en una sola direccion, desde el componente padre hacia los hijos (como en la vida real 😅)

- Percibe como podemos usar el contenido de los componentes como si fuera un atributo mas, llamado `children`

  - Todo lo que este entre el tag de apertura y el de cierre del componente, se pasa como `children`, y lo llamamos de esa forma.

  - Este atributo es especial, ya que no se pasa explicitamente, sino que se pasa implicitamente

  - Esto significa que no es necesario escribirlo, ya que siempre estara disponible

  - Esto es muy util para crear componentes que contengan otros componentes dentro

  - Podemos cerrar el componente con `/>` si no tiene children: `<Componente />`

Luego puedes ir a resolver la practica

> recuerda consultar la [documentacion](/doc/externalLinks.md#clase-2-jsx) si quieres saber mas sobre el tema
