# Clase Components

<details>
<summary style="font-size:28px">Teoria</summary>

---

Lee la siguiente documentacion:

- [Pasando props a un componente](https://react.dev/learn/passing-props-to-a-component)

- [Renderizado condicional](https://react.dev/learn/conditional-rendering)

Comienza a leer el archivo `App.jsx`, intenta entender el flujo de renderizado, el funcionamiento, y como se relacionan los componentes entre si.

- Observa como usamos React Fragment para poder devolver mas de un elemento hermano en el renderizado de un componente.

- Investiga el componente `Header`, y como lo usamos para encapsular parte del maquetado segun su responsabilidad.

- Investiga el componente `Tag`, y como lo usamos para abstraernos del maquetado y estilos de los tags.

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

- Investiga el componente `Button`:

  - Fijate como usamos el spread operator para pasarle todos los props al componente `button` de HTML.

    - Esta es la forma en que implementamos algo similar a la herencia en React. (No es herencia, pero la **composicion** es lo mas parecido que tenemos)

  - Fijate como ampliamos el comportamiento del componente `button` de HTML, agregandole un `loading` y usandolo para deshabilitar el boton y mostrar un mensaje apropiado.

---

Si quieres, puedes ver el ejercicio con el que trabajaremos durante la clase [aqui](/src/clases/04-components/teoria/App.jsx)
</details>
<details>
<summary style="font-size:28px">Practica</summary>

---

### Crear un componente con props

1. Crea una función o componente que reciba `title` como props.

2. La función o componente debe renderizar un `h3` con el valor de `title`.

3. Prueba el comportamiento de la función o componente con los siguientes ejemplos:

```jsx
<NombreComponente title="Géneros" />
<NombreComponente title="Actores" />
```

---

### Crear un componente con children

1. Crea una función/Componente que reciba `children` como props.

2. La función/Componente debe renderizar un `ul` y dentro de él, el valor de `children`.

3. Prueba el comportamiento de la función/Componente con los siguientes ejemplos:

```jsx
<ComponenteLista>
  <li>Acción</li>
  <li>Romance</li>
  <li>Drama</li>
</ComponenteLista>

<ComponenteLista>
  <li>Leonardo DiCaprio</li>
  <li>Brad Pitt</li>
  <li>Tom Cruise</li>
  <li>Will Smith</li>
  <li>Julia Roberts</li>
  <li>Angelina Jolie</li>
  <li>Meryl Streep</li>
  <li>Scarlett Johansson</li>
</ComponenteLista>
```

### Crear un componente generico

1. Crea un componente Card que reciba una prop `children` y que se vea así

    ```jsx	
    <Card>
      card children
    </Card>
    ```

    ```
    +-----------------------+
    |                       |
    |     card children     |
    |                       |
    +-----------------------+
    ```

---

2. Edita el componente Card para que reciba una prop `title` y se vea así

    ```html
    <Card title="card title">
      card children
    </Card>
    ```

    ```
    +-----------------------+
    |       card title      |
    +-----------------------+
    |                       |
    |     card children     |
    |                       |
    +-----------------------+
    ```

---

3. Edita el componente Card para que la prop `title` sea opcional

4. Edita el componente Card para que reciba una prop `footer` opcional y se vea así

    ```html
    <Card footer="card footer">
      card children
    </Card>
    ```

    ```
    +-----------------------+
    |                       |
    |     card children     |
    |                       |
    +-----------------------+
    |      card footer      |
    +-----------------------+
    ```

    ```html
    <Card title="card title" footer="card footer">
      card children
    </Card>
    ```

    ```
    +-----------------------+
    |       card title      |
    +-----------------------+
    |                       |
    |     card children     |
    |                       |
    +-----------------------+
    |      card footer      |
    +-----------------------+
    ```
---

Puedes ver la resolucion [aqui](/src/clases/04-components/practica/App.jsx)
</details>
<details>
<summary style="font-size:28px">Integrador</summary>

1. Crear componente Card, que reciba props title, children, footer. title y footer son opcionales!!

2. Crear un componente info que reciba props label y value.

3. Crear componente Tag que muestre el children

4. Crear componente RepoDetail para mostrar la info de ghRepoDetail.
Usa una card solo con body. En la misma se van a mostrar varios componentes Info con la siguiente informacion
name
created, update y pushed at (usar utility function creada previamente)
description
watchers
forks
stars
link
languages: usar utility function creada previamente para convertir repoLanguages en array, calcular el porcentaje en base a las lineas totales y **mostrar solo el primer elemento**

5. Modificar UserInfo para que use el componente Card, prop title con la imagen y el userName, y el footer con el link al github del usuario. En el children usaremos varios componentes info para mostrar la informacion restante

</details>