# Clase Estilos

<details>
<summary style="font-size:28px">Teoria</summary>

---

Css modules es una tecnica que nos permite escribir estilos modulares, es decir, que no se mezclen entre si, y que no afecten a otros componentes.

Para eso tendremos que realizar los siguiente pasos:

- renombrar los archivos de estilos a `nombre.module.css`

- eliminar los estilos por defecto de los elementos y reemplazarlos por clases

- importar los estilos en el componente con un nombre

- usar los estilos en el JSX como si fueran un objeto

---

Comienza a leer el archivo `App.jsx`, intenta entender el flujo de renderizado, el funcionamiento, y como se relacionan los componentes entre si.

- Observa como cambiamos la extencion de los archivos `css` a `module.css` para poder usarlos como modulos de estilos.

- Mira como importamos los estilos en los componentes, dandoles un nombre y como los usamos en el JSX como si fuera un objeto.

- Recuerda la restriccion de que no podemos tener estilos modulares que no sean clases. si tenemos estilos de etiquetas, debemos refactorizarlos a clases.

- Contempla como usamos el operador `:global` para evitar que el nombre de la clase se modifique al ser importada.

---

Si quieres, puedes ver el ejercicio con el que trabajaremos durante la clase [aqui](/src/clases/05-extilos/teoria/App.jsx)
</details>
<details>
<summary style="font-size:28px">Practica</summary>

---

### Practica de estilos

- Crea un componente `Item` que renderice un `li` y que reciba una prop `children`

- Crea un componente `Lista` que renderice un `ul` y que reciba una prop `children`

*Usando css modules:*

1. Elimina los estilos por defecto de la lista y el item

2. Haz que el item tenga borde, border-radius y un padding de 16px

3. Haz que los elementos de la lista esten uno al lado del otro, con un espacio de 16px entre ellos, y que si no hay espacio para mostrarlos en una sola fila, se muestren en varias filas. (flexbox)

4. Si el item se encuentra dentro de una clase global `compact-theme` haz que todos los paddings y separaciones se reduzcan a la mitad

- pueden corroborar que funcione mostrando en la app algo por el estilo

    ```jsx
    <Lista>
      <Item>Elantris</Item>
      <Item>El camino de los reyes</Item>
      <Item>El imperio final</Item>
      <Item>El pozo de la ascensión</Item>
      <Item>El héroe de las eras</Item>
      <Item>El aliento de los dioses</Item>
      <Item>Palabras radiantes</Item>
      <Item>Juramentada</Item>
    </Lista>
    <div className="compact-theme">
      <Lista>
        <Item>Elantris</Item>
        <Item>El camino de los reyes</Item>
        <Item>El imperio final</Item>
        <Item>El pozo de la ascensión</Item>
        <Item>El héroe de las eras</Item>
        <Item>El aliento de los dioses</Item>
        <Item>Palabras radiantes</Item>
        <Item>Juramentada</Item>
      </Lista>
    </div>
    <ul>
      <li>Elantris</li>
      <li>El camino de los reyes</li>
      <li>El imperio final</li>
      <li>El pozo de la ascensión</li>
      <li>El héroe de las eras</li>
      <li>El aliento de los dioses</li>
      <li>Palabras radiantes</li>
      <li>Juramentada</li>
    </ul>
    ```

    ```
    +--------------+----------------------------+----------------------+
    |              |                            |                      |
    |   Elantris   |   El camino de los reyes   |   El imperio final   |
    |              |                            |                      |
    +--------------+--------------+-------------+------------+---------+
    |                             |                          |
    |   El pozo de la ascensión   |   El héroe de las eras   |
    |                             |                          |
    +-----------------------------++------------------------++
    |                              |                        |
    |   El aliento de los dioses   |   Palabras radiantes   |
    |                              |                        |
    +-----------------+------------+------------------------+
    |                 |
    |   Juramentada   |
    |                 |
    +-----------------+

    +----------+------------------------+------------------+
    | Elantris | El camino de los reyes | El imperio final |
    +----------+--------------+---------+------------+-----+
    | El pozo de la ascensión | El héroe de las eras |
    +-------------------------++--------------------++
    | El aliento de los dioses | Palabras radiantes |
    +-------------+------------+--------------------+
    | Juramentada |
    +-------------+

    - Elantris
    - El camino de los reyes
    - El imperio final
    - El pozo de la ascensión
    - El héroe de las eras
    - El aliento de los dioses
    - Palabras radiantes
    - Juramentada
    ```


---

Puedes ver la resolucion [aqui](/src/clases/05-estilos/practica/App.jsx)
</details>
<details>
<summary style="font-size:28px">Integrador</summary>

1. Agregarle estilos a Tag: border, background, border-radius, y padding

2. Agregarle estilos a Info: Y muestre ambos valores verticalmente separados por algunos pixeles, y el label bold

3. Agregarle estilos a la card: border, border radius y un color de fondo
El title tiene border bottom y padding
el body tiene padding, y dentro va el children
El footer tiene padding y border top

4. Agregarle estilos al Header: display flex, justify-content space-between, padding, border-bottom

</details>