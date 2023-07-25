# Clase JSX

<details>
<summary style="font-size:28px">Teoria</summary>

---

En esta clase vamos a aprender sobre JSX, que es una extension de javascript que nos permite escribir codigo html dentro de nuestros archivos javascript. Esto nos va a permitir crear componentes de una forma mas sencilla y legible.

recuerda que a partir de ahora, la extension de los archivos que vamos a usar es `.jsx`

Lee la siguiente documentacion:

- [Maquetando con JSX](https://react.dev/learn/writing-markup-with-jsx)

- [Javascript en JSX con llaves](https://react.dev/learn/javascript-in-jsx-with-curly-braces)

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

---

Si quieres, puedes ver el ejercicio con el que trabajaremos durante la clase [aqui](/src/clases/03-JSX/teoria/App.jsx)
</details>
<details>
<summary style="font-size:28px">Practica</summary>

---

Usando la siguiente [data](/src/fakeApi/movies.json)

Dentro de App renderiza los siguientes elementos:

1. Un componente `Header` con el nombre y el logo de la pagina.

2. un h1 con el titulo de la primera pelicula.

3. un p con el genero de la primera pelicula.

4. un button para ver la pelicula *(cuando se hace click tiene que mostrar la edad minima recomendada por consola)*.
  
    - se debe pasar el valor por parametro a la funcion

---

Puedes ver la resolucion [aqui](/src/clases/03-JSX/practica/App.jsx)
</details>
<details>
<summary style="font-size:28px">Integrador</summary>

1. Crear un componente Navbar que renderice un header que internamente tendra 2 bloques

por un lado el [logo](/public/hitbug-logo.png) y nombre de la aplicacion

por otro lado 3 span con los siguientes textos: `User Info`, `Repos`, `Log Out`; y un bloque con el nombre y avatar del [usuario](/src/fakeApi/ghUser.json)

No es necesario aplicar estilos aun


2. Crear componente Login que muestre el logo y el nombre de la aplicacion (el formulario no)

3. Crear un componente para la Home Page, que muestre Welcome userName (usar la data mockeada)

4. Crear componente UserInfo que muestre la imagen y nombre del usuario, un link externo al github del usuario, cant Seguidores, cant siguiendo, cant repos, bio

No es necesario aplicar estilos aun

</details>