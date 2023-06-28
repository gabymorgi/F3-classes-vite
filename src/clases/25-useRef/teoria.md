# Teoria clase 25!

- Comienza a leer el archivo `App.jsx`, intenta entender el flujo de renderizado, el funcionamiento, y como se relacionan los componentes entre si.

- Aprende la sintaxis para crear un `useRef`

  - Nos permite guardar variables que persisten entre renderizados, y que no disparan un nuevo renderizado cuando cambian.

  - Nos permite acceder al DOM de un elemento, lo que en js vanilla se hace con `document.getElementById()`

- Observa como usamos `useRef` en `Clock.jsx` para guardar la referencia al interval. Esto nos permite acceder al interval desde cualquier parte del componente, y poder limpiarlo cuando el componente se desmonta.

- Observa como usamos `useRef` en `App.jsx` para guardar la ref a un elemento del DOM, y poder volver a el cuando apretamos el boton.

- Recuerda que no podemos usar `useRef` en Componentes, solo en Etiquetas HTML.

  - Para hacerlo en componentes, debemos usar `forwardRef` y `useImperativeHandle`, pero eso excede el alcance de este curso.

Luego puedes ir a resolver la practica.

> recuerda consultar la [documentacion](/doc/externalLinks.md#clase-25-useref) si quieres saber mas sobre alguna instruccion
