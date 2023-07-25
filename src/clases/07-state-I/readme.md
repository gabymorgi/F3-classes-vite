# Clase State I

<details>
<summary style="font-size:28px">Teoria</summary>

---

Lee la siguiente documentacion:

- [Porque estados y no variables](https://react.dev/learn/state-a-components-memory)

- [Pasos involucrados en el render (ciclo de vida)](https://react.dev/learn/render-and-commit)

- [Snapshot en estados](https://react.dev/learn/state-as-a-snapshot)

- [Multiples actualizaciones de estado](https://react.dev/learn/queueing-a-series-of-state-updates)

- [uso general y ejemplos](https://react.dev/reference/react/useState)

Comienza a leer el archivo `App.jsx`, intenta entender el flujo de renderizado, el funcionamiento, y como se relacionan los componentes entre si.

- Aprende la sintaxis del useState

- Entiende el ciclo de actualizacion de un componente

  - Cada vez que se actualiza el estado de un componente, se vuelve a renderizar tanto el componente que declara el useState, como sus hijos.

- Observa como no podemos decidir cuando se actualiza el estado y se vuelve a renderizar un componente, esto lo decide React.

- Analiza como podemos usar callbacks para actualizar el estado de un componente padre desde un componente hijo.

---

Si quieres, puedes ver el ejercicio con el que trabajaremos durante la clase [aqui](/src/clases/07-state-I/teoria/App.jsx)
</details>
<details>
<summary style="font-size:28px">Practica</summary>

---

### Practica de State con datos simples

1. Crea un componente Calculadora que muestre un texto con un valor inicial en 0

2. Agrega al componente Calculadora 4 botones con la siguiente funcionalidad:

    - Al presionar el botón `+` el valor del texto aumenta en 1

    - Al presionar el botón `-` el valor del texto disminuye en 1

    - Al presionar el botón `reset”`el valor del texto se pone en 0

    - Al presionar el boton `=` se muestra por consola el valor actual del texto

3. Modifique el componente Calculadora con lo siguiente:

    - Recibira una prop amount que sera el valor por el que se incrementara o decrementar cada vez que se apreta en `+` o `-`

    - Recibira una prop `onEqual` que sera una funcion que se ejecutara cuando se aprete en `=`

4. Agregue en App lo siguiente:

    - 3 componentes `Calculadora`, la primera incrementara de a 1, la segunda de a 5, y la tercera de a 13

    - Un estado `sum` de tipo number

    - Cuando se aprete en `=` en cualquiera de las calculadoras:

      - se debe incrementar `sum` con el total de la calculadora

      - mostrar el valor de `sum` en la App

---

Puedes ver la resolucion [aqui](/src/clases/07-state-I/practica/App.jsx)
</details>
<details>
<summary style="font-size:28px">Integrador</summary>

Usar un estado en el header para mostrar la tab active

</details>