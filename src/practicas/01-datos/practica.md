# Practica clase 1!

Usando la lista de [usuarios](https://github.com/gabymorgi/F3-classes-vite/blob/main/src/fakeApi/users.json)

*copia y pega el contenido en una variable. Import y export no funcionan fuera de Node, asi que no te preocupes por eso*

### Ejercicio 1

Muestra por consola:
- el `email` del primer Usuario
- el `apodo` del tercer Usuario
- el color de la segunda `mascota` del tercer Usuario

---

### Ejercicio 2

Usando desestructuracion:
- extrae en variables el primer y cuarto elemento
- usando lo obtenido arriba extrae en variables `email` y `mascotas` del primer elemento

---

### Ejercicio 3

spread operator:
- haz una copia de las `mascotas` obtenidas arriba y agregale la mascota `{ "nombre": "Nami", "edad": 2, "color": "negro" }`
(usar console log para mostrar que no se modifico el original)

---

### Ejercicio 4

- crea una funcion que reciba por props un objeto con las siguientes keys: **name**, **cantMascotas** y que retorne un string con el siguiente formato
`"El Usuario {name} tiene {cantMascotas} mascotas"`

---

### Ejercicio 5

- usando la operacion `filter`, crea un array con los Usuarios que tengan **mas** de 1 mascota
- usando la operacion `map` y la funcion anterior, crea un array de strings con el nombre y la cantidad de mascotas de cada Usuario filtrado anteriormente
Ej:
```js
[
  "El Usuario Gaby tiene 3 mascotas",
  "El Usuario Morgi tiene 5 mascotas"
]
```
- Usando la operacion reduce devuelve la cantidad total de mascotas
