# Clase Datos

<details>
<summary style="font-size:28px">Teoria</summary>

---

Es importante saber que en este proyecto, estamos usando instrucciones de EcmaScript 6, que es la version mas nueva de javascript. Puede que algunas de ellas no funcionen si no tenemos Node, por ejemplo la instruccion `import` que nos permite importar modulos de otros archivos.

Para el resto de cosas, puedes usarlas como venian trabajando hasta ahora (archivos .html y .js)

En el archivo `index.js` te encontraras con ciertas utilidades de javascript que nos van a servir para el curso y que es importante que conozcas. cada instruccion esta comentada y podras aprender sobre:

- Tipos de datos

- Uso de backlit para crear strings

- Uso de funciones y callbacks

- Destructuring

- Spread operator
  
  - [Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

- Metodos de arrays

  - [Documentación de la Clase Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods)

- Metodos de objetos

  - [Iterador Object.keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

  - [Iterador Object.values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

  - [Iterador Object.entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)

---

Si quieres, puedes ver el ejercicio con el que trabajaremos durante la clase [aqui](/src/clases/01-datos/teoria/App.jsx)
</details>
<details>
<summary style="font-size:28px">Practica</summary>

---

Usando la lista de [usuarios](/src/fakeApi/users.json)

*Copia y pega el contenido en una variable. Import y export **no** funcionan fuera de Node, asi que no te preocupes por eso*

---

### Ejercicio 1

- **Muestra por consola:**

  - El `email` del primer Usuario.

  - El `apodo` del tercer Usuario.

  - El color de la segunda `mascota` del tercer Usuario.

---

### Ejercicio 2

- **Usando desestructuracion:**

  - Extrae en variables el primer y cuarto elemento.

  - Extrae en variables `email` y `mascotas` del primer elemento.

---

### Ejercicio 3

- **Spread operator:**

  - Haz una copia de las `mascotas` obtenidas arriba y agregale la mascota

    `{ "apodo": "Nami", "edad": 2, "color": "negro" }`

    *(Usar console log para verificar que no se modifico el original)*

---

### Ejercicio 4

- **String builder**

  - Crea una funcion que reciba por props un objeto con las siguientes keys: **name**, **cantMascotas** y que retorne un *string* con el siguiente formato:

    `"El Usuario {name} tiene {cantMascotas} mascotas"`

---

### Ejercicio 5

- **Array functions**

  - Usando la operacion `filter`, crea un array con los Usuarios que tengan **mas** de 1 mascota.

  - Usando la operacion `map` y la funcion del ejercicio 4, crea un array de strings con el apodo y la cantidad de mascotas de cada Usuario filtrado anteriormente. Ej:

    ```js
    [
      "El Usuario Gaby tiene 3 mascotas",
      "El Usuario Morgi tiene 5 mascotas"
    ]
    ```

  - Usando la operacion reduce devuelve la cantidad total de mascotas.


---

Puedes ver la resolucion [aqui](/src/clases/01-datos/practica/App.jsx)
</details>
<details>
<summary style="font-size:28px">Integrador</summary>

- Crear funcion que convierta Date en string format "dd/mm/yyyy"

- Crear funcion que convierta un objeto `{[key]: value}` en un array `[{ name: [key], value: value}]`
</details>