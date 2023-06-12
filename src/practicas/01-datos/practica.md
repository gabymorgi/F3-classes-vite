# Practica clase 1!

Usando la lista de [usuarios](/src/fakeApi/users.json)

*Copia y pega el contenido en una variable. Import y export **no** funcionan fuera de Node, asi que no te preocupes por eso*

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

    `{ "nombre": "Nami", "edad": 2, "color": "negro" }`

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

  - Usando la operacion `map` y la funcion del ejercicio 4, crea un array de strings con el nombre y la cantidad de mascotas de cada Usuario filtrado anteriormente.
Ej:

    ```js
    [
      "El Usuario Gaby tiene 3 mascotas",
      "El Usuario Morgi tiene 5 mascotas"
    ]
    ```

  - Usando la operacion reduce devuelve la cantidad total de mascotas.
