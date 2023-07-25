# Clase X

<details>
<summary style="font-size:28px">Teoria</summary>

---

Lee la siguiente documentacion:

- [Convirtiendo estados en reducer](https://react.dev/learn/extracting-state-logic-into-a-reducer)

Comienza a leer el archivo `App.jsx`, intenta entender el flujo de renderizado, el funcionamiento, y como se relacionan los componentes entre si.

- Aprende la sintaxis para crear un `reducer`.

  - El primer parametro es la funcion que gestiona el cambio de estado.

  - El segundo parametro es el estado inicial.

  - El tercer parametro es una funcion que calcula el estado inicial. Es opcional.

- Observa como nos abstraemos de la logica de gestionar el estado, y como solo nos preocupamos de saber el tipo de accion que queremos realizar. 

  - En el componente `Calculator.jsx` solo nos preocupamos de saber si queremos sumar, restar, multiplicar o dividir, y de los parametros que necesita. Pero no nos preocupamos de como se realiza la operacion.

  - La funcion `calcReducer` se encarga de gestionar el estado, y de realizar la operacion, a partir de la accion que le pasamos.

- Recuerda que el `reducer` nos permite simplificar la logica de gestionar un estado muy complejo.

---

Si quieres, puedes ver el ejercicio con el que trabajaremos durante la clase [aqui](/src/clases/19-reducer/teoria/App.jsx)
</details>
<details>
<summary style="font-size:28px">Practica</summary>

---

1. Crea un contador que se pueda incrementar o decrementar en un `paso` determinado por el usuario.

2. La app tendra un input para ingresar el `paso`, que se manejara con un estado

    ademas tendra dos botones, uno para incrementar y otro para decrementar el contador

3. El contador se manejara con un reducer con dos acciones: incrementar y decrementar

4. El payload de la accion sera el `paso`

---

### Reducer Ejercicio 2

1. crea una app que te permita gestionar una lista de tareas

2. cada tarea tiene
  
    - un texto
  
    - un bool que indica si esta completada o no

3. la app debe permitir las siguientes acciones
  
    - Agregar una tarea

    - Marcar una tarea como completadas

    - Eliminar una tarea

    - Marcar todas las tareas completadas
    
    - Eliminar todas las tareas completadas

4. utilice un reducer para manejar el comportamiento de la lista en cada una de las acciones

> TIP: en la actividad **context**, hicimos un ejercicio similar

---

Puedes ver la resolucion [aqui](/src/clases/19-reducer/practica/App.jsx)
</details>
<details>
<summary style="font-size:28px">Integrador</summary>

Usar un reducer en el context con las acciones: login, logout

</details>