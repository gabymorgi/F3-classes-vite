# Clase X

<details>
<summary style="font-size:28px">Teoria</summary>

---

Lee la siguiente documentacion

- [Introduccion a Context](https://react.dev/learn/passing-data-deeply-with-context)

Comienza a leer el archivo `App.jsx`, intenta entender el flujo de renderizado, el funcionamiento, y como se relacionan los componentes entre si.

- Aprende como crear un contexto a traves de `createContext`.

- Aprende a usar el `Provider` para definir los valores y funciones que se van a compartir a traves del contexto.

- Observa como definimos implementamos el `Provider` en `App.jsx` y definimos quien tiene acceso a los valores y funciones del contexto.

- Observa como consumimos el contexto en `WithContext.jsx` para poder acceder a los valores y funciones que se comparten a traves del contexto.

---

Si quieres, puedes ver el ejercicio con el que trabajaremos durante la clase [aqui](/src/clases/17-context/teoria/App.jsx)
</details>
<details>
<summary style="font-size:28px">Practica</summary>

---

Crea una app con lo siguiente
  
1. Un context que permita gestionar una lista de tareas y exponga
  
    - la lista de tareas
  
    - un metodo para agregar una tarea
  
    - un metodo para eliminar una tarea

2. Un componente que es un formulario para crear tareas con
  
    - un input text
    - un boton para agregar

3. Un componente que es una lista de tareas
  
    - cada tarea tiene un boton para eliminar

---

Puedes ver la resolucion [aqui](/src/clases/17-context/practica/App.jsx)
</details>
<details>
<summary style="font-size:28px">Integrador</summary>

1. Crear un Contexto que almacene la informacion del usuario, y que exponga dicha informacion, y una funcion de login

2. Modificar la funcion de login, para que almacene la informacion del usuario ingresado en un contexto

3. refactorizar boton logout para que borre los datos del user al hacer click y redireccione a /login

</details>