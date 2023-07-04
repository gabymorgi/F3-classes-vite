# Clase Fetch

<details>
<summary style="font-size:28px">Teoria</summary>

---

Lee la siguiente documentacion:

- [ ] [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

- [ ] [Funciones asincrónicas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

Comienza a leer el archivo `App.jsx`, intenta entender el flujo de renderizado, el funcionamiento, y como se relacionan los componentes entre si.

- [ ] Aprende la sintaxis de `fetch`

- [ ] Recuerda la sintaxis de las funciones asincronas

- [ ] Analiza las ventajas de usar `async await` en vez de `.then`

- [ ] Observa como obtenemos los datos de la API, y como usamos un estado para guardarlos e indicarle a React que debe renderizar nuevamente.

- [ ] Observa como utilizamos un estado `loading` para darle feedback al usuario mientras se obtienen los datos.

- [ ] Observa como utilizamos un estado `error` para darle feedback al usuario en caso de que ocurra un error.

---

Si quieres, puedes ver el ejercicio con el que trabajaremos durante la clase [aqui](/src/clases/12-fetch/teoria/App.jsx)
</details>
<details>
<summary style="font-size:28px">Practica</summary>

---

### Fetch ejercicio 1

Crea una app con lo siguiente

1. En el mount hara un fetch a `https://jsonplaceholder.typicode.com/posts/1` y guardara el `titulo` en un estado

2. Un texto que muestre el `titulo` guardado en el estado

---

### Fetch ejercicio 2

Crea una app con lo siguiente
  
1. Un boton con el texto `buscar datos`

    - `onClick` llama a una async function

      - utilizando la api `https://cat-fact.herokuapp.com/facts` obtiene una lista de hechos

      - guarda en un estado el `_id` y `text` de cada hecho
  
2. Una lista que muestre los datos guardados en el estado

3. Mientras se esten cargando los datos, muestra un texto `cargando datos`

---

### Fetch ejercicio 3

Crea una app con lo siguiente

1. Un boton con el texto `siguiente facto`
    
    - `onClick` llama a una async function

      - utilizando la api `https://cat-fact.herokuapp.com/facts/random` guarda en un estado el `text` del facto
  
2. Un texto que muestre el facto guardado en el estado

3. Ni bien inicia la app
  
    - Se llama a la api
    
    - Se guarda un facto en el estado

---

### Fetch ejercicio 4

Crea una app con lo siguiente

1. Un formulario que permita ingresar un titulo `input text` y un body `textarea`

2. Un boton con el texto `guardar`
  
      - `onClick` llama a una async function
  utilizando la api `https://jsonplaceholder.typicode.com/posts`
  
      - *(la api no guarda los datos en el servidor, pero devolvera como si lo hiciera)*

---

### Fetch ejercicio 5

Crea una app con lo siguiente

1. Un estado para guardar posts

2. Un estado para guardar errores de la api

3. Un estado para guardar el loading de la api

4. Una funcion que hara un fetch a `https://jsonplaceholder.typicode.com/posts`
  
    - En el mount se llamara a la funcion que hace el fetch y guardara los datos en un estado.

5. Un formulario que permita ingresar un titulo `input type text` y un body `textarea`

6. Un boton con el texto `guardar`
  
    - `onClick` llama a una async function
  utilizando la api `https://jsonplaceholder.typicode.com/posts`
  
    - *(la api no guarda los datos en el servidor, pero devolvera como si lo hiciera)*

    - Se volvera a hacer un fetch a `https://jsonplaceholder.typicode.com/posts` para simular que obtenemos los datos guardados en el servidor actualizados

7. Una lista que muestre los datos guardados en el estado

---

Puedes ver la resolucion [aqui](/src/clases/12-fetch/practica/App.jsx)
</details>
<details>
<summary style="font-size:28px">Integrador</summary>
WIP: come later
</details>