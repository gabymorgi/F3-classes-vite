# Practica clase 13!

### UseEffect ejercicio 1

Crea una App que imprima por consola `hola mundo` cuando se monta

---

### UseEffect ejercicio 2

Crea una App con lo siguiente
  
1. Un estado `isActive` de tipo booleano

2. Un boton que alterna el valor de `isActive`
  
3. Un componente que **solo se muestra si** `isActive` es true
  
  el componente muestra por pantalla "activo"
  el componente muestra por consola "activo" cuando se monta
  el componente muestra por consola "desactivo" cuando se desmonta

---

### UseEffect ejercicio 3

Crea una App con lo siguiente
  
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
  el texto del boton es `Hacer pedido`
  al clickar cambia `inProgress` a true
  
3. Un componente que **solo se muestra si** `inProgress` es true con lo siguiente
  una prop `cancelar` que es una funcion que cambia `inProgress` a false
  Un estado booleano que indica si el pedido fue confirmado `isConfirmed`
  Cuando el componente se monta muestra por consola `procesando pedido`
  A los 2 segundos cambia `isConfirmed` a true. Usar [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
  Cuando el componente se desmonta muestra por consola `pedido cancelado`
  **asegurate que el timeout se limpie**
  
El componente renderiza
  un texto que dice `procesando pedido` o `pedido confirmado` segun corresponda a `isConfirmed`
  un boton con el texto `cancelar` que ejecuta la funcion `onCancel` recibida por props
