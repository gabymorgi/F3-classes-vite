# Practica clase 14!

### Fetch ejercicio 1

Crea una app con lo siguiente

1. En el mount hara un fetch a `https://jsonplaceholder.typicode.com/posts/1` y guardara el `titulo` en un estado

2. Un texto que muestre el `titulo` guardado en el estado

---

### Fetch ejercicio 2

Crea una app con lo siguiente
  
1. Un boton con el texto `buscar datos`

2. `onClick` llama a una async function

utilizando la api `https://cat-fact.herokuapp.com/facts` obtiene una lista de hechos
guarda en un estado el `_id` y `text` de cada hecho
  
3. Una lista que muestre los datos guardados en el estado

4. Mientras se esten cargando los datos, muestra un texto `cargando datos`

---

### Fetch ejercicio 3

Crea una app con lo siguiente

1. Un boton con el texto `siguiente hecho`
    
2. `onClick` llama a una async function

utilizando la api `https://cat-fact.herokuapp.com/facts/random` guarda en un estado el `text` del hecho
  
3. Un texto que muestre el hecho guardado en el estado

4. Ni bien inicia la app, se llama a la api y se guarda el hecho en el estado

---

### Fetch ejercicio 4

Crea una app con lo siguiente

1. Un formulario que permita ingresar un titulo `input text` y un body `textarea`

2. Un boton con el texto `guardar`
  
`onClick` llama a una async function
  utilizando la api `https://jsonplaceholder.typicode.com/posts`
  (la api no guarda los datos en el servidor, pero devolvera como si lo hiciera)

---

### Fetch ejercicio 5

Crea una app con lo siguiente

1. Un estado para guardar posts

2. Un estado para guardar errores de la api

3. Un estado para guardar el loading de la api

4. Una funcion que hara un fetch a https://jsonplaceholder.typicode.com/posts
  
En el mount se llamara a la funcion que hace el fetch y guardara los datos en un estado

5. Un formulario que permita ingresar un titulo `input text` y un body `textarea`

6. Un boton con el texto `guardar`
  
`onClick` llama a una async function
  utilizando la api `https://jsonplaceholder.typicode.com/posts`
  (la api no guarda los datos en el servidor, pero devolvera como si lo hiciera)

Se volvera a hacer un fetch a `https://jsonplaceholder.typicode.com/posts`

7. Una lista que muestre los datos guardados en el estado
