# Clase X

<details>
<summary style="font-size:28px">Teoria</summary>

---

Lee la siguiente documentacion:

- [useParam](https://reactrouter.com/en/main/hooks/use-params)

- [useNavigate](https://reactrouter.com/en/main/hooks/use-navigate)

Comienza a leer el archivo `App.jsx`, intenta entender el flujo de renderizado, el funcionamiento, y como se relacionan los componentes entre si.

- Aprende como realizar rutas dinamicas

- Aprende como utilizar `useParams` para obtener los parametros de la ruta

---

Si quieres, puedes ver el ejercicio con el que trabajaremos durante la clase [aqui](/src/clases/15-router-II/teoria/App.jsx)
</details>
<details>
<summary style="font-size:28px">Practica</summary>

---

### Ejercicio 1: useParams

Crea una web con lo siguientes
  
1. En el index se mostrara una lista de post traidos de aqui
    
    `https://jsonplaceholder.typicode.com/posts`

    -  Cuando se clicka en un post, se redirigira la web a `/posts/:id` donde se mostrara el post con el id `:id` 
        
        (traer la data de `https://jsonplaceholder.typicode.com/posts/:id`)
  
2. Un boton para ir hacia atras

---

### Ejercicio 2: useSearchParams

Crea una web que muestre una lista importada de [aqui](/src/fakeApi/games.json)

1. En el index se mostrara un formulario con los siguientes campos
  
    - Select de generos: 
      
      "Roguelike"

      "Platformer"

      "Action"

      "Adventure"

      "Puzzle"

      "Metroidvania"

      "Simulation"

      "Board"

      "Precision"

    - Min played Time
  
2. Guarde los datos del formulario en la url para no perder la seleccion al recargar

3. Con estos filtros se mostraran la seleccion de juegos correspondiente

4. Cada juego ira al `onClick` a un vista de detalle

---

**¿en que se diferencia el useParams de useSearchParams?**

  > TIP: useParams es para obtener parametros de la url, useSearchParams es para obtener parametros de la query string

  > TIP: useParams es para almacenar datos estructurales, useSearchParams es para almacenar datos de busqueda o filtros

---

Puedes ver la resolucion [aqui](/src/clases/15-router-II/practica/App.jsx)
</details>
<details>
<summary style="font-size:28px">Integrador</summary>

1. agregar ruta

  - repo/:repoId

Utilizar useParams para obtener el id en repo detail, y usarlo para obtener el repo

2. Agregar go back button en el componente repo detail

3. Utilizar useSearchParams para almacenar los datos del formulario de repolist

usarlos para buscar los repos con la api

</details>