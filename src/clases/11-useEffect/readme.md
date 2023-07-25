# Clase X

<details>
<summary style="font-size:28px">Teoria</summary>

---

Lee la siguiente documentacion:

- [Introduccion a useEffect](https://react.dev/learn/synchronizing-with-effects)

- [Ciclo de vida del useEffect](https://react.dev/learn/lifecycle-of-reactive-effects)

- [Eventos o Efectos](https://react.dev/learn/separating-events-from-effects)

- [uso general y ejemplos](https://react.dev/reference/react/useEffect)

Comienza a leer el archivo `App.jsx`, intenta entender el flujo de renderizado, el funcionamiento, y como se relacionan los componentes entre si.

- Aprende la sintaxis de `useEffect`

  - Recuerda que el primer parametro es una funcion, que se ejecutara cuando el componente se monte, y cada vez que cambie el valor de alguna de las dependencias.

  - El segundo parametro es un array de dependencias, que le indica a React que debe ejecutar la funcion del primer parametro, solo cuando cambie el valor de alguna de las dependencias.

- Observa como controlamos el ciclo de vida de un componente con `useEffect` a travez del componente padre.

---

Si quieres, puedes ver el ejercicio con el que trabajaremos durante la clase [aqui](/src/clases/11-useEffect/teoria/App.jsx)
</details>
<details>
<summary style="font-size:28px">Practica</summary>

---

### UseEffect ejercicio 1

- Crea una App que imprima por consola `hola mundo` cuando se monta

---

### UseEffect ejercicio 2

- Crea una App con lo siguiente
  
1. Un estado `isActive` de tipo booleano

2. Un boton que alterna el valor de `isActive`
  
3. Un componente que **solo se muestra si** `isActive` es true
  
    - El componente muestra por pantalla "activo"

    - El componente muestra por consola "activo" cuando se monta

    - El componente muestra por consola "desactivo" cuando se desmonta

---

### UseEffect ejercicio 3

- Crea una App con lo siguiente
  
1. Un input para ingresar un nombre

2. Un boton de submit que va a copiar el contenido del input en un nuevo estado `submitedValue`

3. Un componente que reciba una prop con el valor `submitedValue`
    
4. El componente muestra la prop por pantalla
    
5. El componente tiene un effecto que se ejecuta cuando la prop cambia

6. si la prop no esta vacia muestra por consola `buscando datos en api.github.com/users/${submitedValue}`

---

### UseEffect ejercicio 4

Crea una App con lo siguiente
  
1. Un estado booleano que indica si hay un pedido en curso `inProgress`

2. Un boton que **solo se muestra si** `inProgress` es false

    - el texto del boton es `Hacer pedido`
    
    - al clickar cambia `inProgress` a true
  
3. Un componente que **solo se muestra si** `inProgress` es true con lo siguiente:

    - Una prop `cancelar` que es una funcion que cambia `inProgress` a false

    - Un estado booleano que indica si el pedido fue confirmado `isConfirmed`

    - Cuando el componente se monta muestra por consola `procesando pedido`

    - A los 2 segundos cambia `isConfirmed` a true. Usar [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)

    - Cuando el componente se desmonta muestra por consola `pedido cancelado`

      - **asegurate que el timeout se limpie**
  
    - El componente renderiza

      - Un texto que dice `procesando pedido` o `pedido confirmado` segun corresponda a `isConfirmed`

      - Un boton con el texto `cancelar` que ejecuta la funcion `onCancel` recibida por props

---

Puedes ver la resolucion [aqui](/src/clases/11-useEffect/practica/App.jsx)

> **Lecturas Avanzadas:**
>
> 2ez?, puedes leer las siguientes lecturas avanzadas:
>
> - [Puede que no necesites un effect](https://react.dev/learn/you-might-not-need-an-effect)
>
> - [Quitando dependencias](https://react.dev/learn/removing-effect-dependencies)
</details>
<details>
<summary style="font-size:28px">Integrador</summary>

Meter busqueda de datos en useEffect

- Crear una funcion que haga un get a la api de github. 

si devuelve info(el user existe), imprimir esa info por consola.

Si no, mostrar un mensaje de error

- Crear una funcion que reciba nombre de usuario y nombre de repo, y devuelva el detalle de ese repo junto con los lenguajes utilizados

</details>