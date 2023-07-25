# Clase X

<details>
<summary style="font-size:28px">Teoria</summary>

---

Lee la siguiente documentacion

- [localStorage API](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)

Comienza a leer el archivo `App.jsx`, intenta entender el flujo de renderizado, el funcionamiento, y como se relacionan los componentes entre si.

- Aprende la sintaxis para guardar y obtener valores del `localStorage`.

- Observa como necesitamos un estado para que React vuelva a renderizar el componente cuando cambia el valor del `localStorage`.

- Detesta como el `localStorage` solo guarda strings, y como tenemos que convertir los valores a strings y de strings a valores.

- Recuerda que el `localStorage` es una forma de guardar datos en el navegador, y que estos datos se mantienen incluso cuando cerramos el navegador.

- Recuerda que puedes ver los datos que se guardan en el `localStorage` desde el inspector de elementos, en la pestaña de `Application`, en la seccion de `Storage`.


Si te preocupa la seguridad de tu aplicacion, te puede interesar este articulo. Tambien puedes buscar distintas opiniones para contrastar la informacion.

- [Que informacion guardar en localStorage](https://www.rdegges.com/2018/please-stop-using-local-storage)

---

Si quieres, puedes ver el ejercicio con el que trabajaremos durante la clase [aqui](/src/clases/18-localStorage/teoria/App.jsx)
</details>
<details>
<summary style="font-size:28px">Practica</summary>

---

### Context Ejercicio 1

Crea una app que muestre una lista de [peliculas](/src/fakeApi/movies.json)

1. La app debera tener un formulario que solicite el año de nacimiento del usuario.

2. Esta fecha se guardara en `localStorage`.

3. Luego se mostrara la lista de peliculas importada del `json` anterior.

4. Se debera mostrar el `titulo`, el `genero`, y un boton para ver la pelicula

5. Al hacer click en el boton, se debera buscar en el `localStorage` la edad del usuario.

    - Si cumple los requisitos, se mostrara por consola un mensaje de success.

    - Si no, se mostrara un mensaje de error

---

### Context Ejercicio 2

Crea una app que muestre una lista de [libros](/src/fakeApi/books.json)

Crea una app con dos secciones

1. Un listado de libros favoritos

2. Un listado de todos los libros

    - cuando se hace click, se agrega a favoritos si es que no esta.
     
    - si no, se elimina.

---

Puedes ver la resolucion [aqui](/src/clases/18-localStorage/practica/App.jsx)
</details>
<details>
<summary style="font-size:28px">Integrador</summary>

Guardar lenguaje favorito en el storage

</details>