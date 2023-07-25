# Clase X

<details>
<summary style="font-size:28px">Teoria</summary>

---

Lee la siguiente documentacion

- [referenciando variables con useRef](https://react.dev/learn/referencing-values-with-refs)

- [manipulando el DOM con useRef](https://react.dev/learn/manipulating-the-dom-with-refs)

- [uso general y ejemplos](https://react.dev/reference/react/useRef)

Comienza a leer el archivo `App.jsx`, intenta entender el flujo de renderizado, el funcionamiento, y como se relacionan los componentes entre si.

- Aprende la sintaxis para crear un `useRef`

  - Nos permite guardar variables que persisten entre renderizados, y que no disparan un nuevo renderizado cuando cambian.

  - Nos permite acceder al DOM de un elemento, lo que en js vanilla se hace con `document.getElementById()`

- Observa como usamos `useRef` en `Clock.jsx` para guardar la referencia al interval. Esto nos permite acceder al interval desde cualquier parte del componente, y poder limpiarlo cuando el componente se desmonta.

- Observa como usamos `useRef` en `App.jsx` para guardar la ref a un elemento del DOM, y poder volver a el cuando apretamos el boton.

- Recuerda que no podemos usar `useRef` en Componentes, solo en Etiquetas HTML.

  - Para hacerlo en componentes, debemos usar `forwardRef` y `useImperativeHandle`, pero eso excede el alcance de este curso.

---

Si quieres, puedes ver el ejercicio con el que trabajaremos durante la clase [aqui](/src/clases/21-useRef/teoria/App.jsx)
</details>
<details>
<summary style="font-size:28px">Practica</summary>

---

Cree una aplicacion con el siguiente contenido

1. Un titulo con el texto `condiciones de uso)`

2. Un boton con el texto `ir a firmar`

    - Al presionar el boton mostrar en pantalla el boton para firmar
    
    > TIP: usa [scrollIntoView](https://developer.mozilla.org/es/docs/Web/API/Element/scrollIntoView)

3. Una seccion con un texto muy largo 

    *(puedes setearle un height de 1000px para simularlo)*

4. Un boton con el texto `firmar`
  
    - Al presionar el boton 3 veces. Mostrar un mensaje en consola

    - El componente no debe hacer rerender al presionar el boton

---

Puedes ver la resolucion [aqui](/src/clases/21-useRef/practica/App.jsx)
</details>
<details>
<summary style="font-size:28px">Integrador</summary>

Agregar un boton scroll to top que este sticky

</details>