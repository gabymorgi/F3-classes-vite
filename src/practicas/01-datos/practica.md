# Practica clase 1!

(Puedes usar los datos en src\fakeApi\data.json para hacer los ejercicios)

### Ejercicio 1

Muestra por consola:
- el id del primer Juego
- el nombre del tercer juego
- el nombre del quinto achievement del segundo juego

---

### Ejercicio 2

Usando desestructuracion:
- extrae en variables el primer y cuarto elemento
- usando lo obtenido arriba extrae en variables el tiempo jugado y los tags del primer elemento

---

### Ejercicio 3

spread operator:
- haz una copia de los tags obtenidos arriba y agregale el tag "2D"
(usar console log para mostrar que no se modifico el original)

---

### Ejercicio 4

- crea una funcion que reciba por props un objeto con las siguientes keys: **name**, **playedTime** y que retorne un string con el siguiente formato
`"El juego {name} se jugo por {playedTime} horas"`

---

### Ejercicio 5

- usando la operacion filter, crea un array con los juegos que tengan score mayor o igual a 9
- usando la operacion map y la funcion anterior, crea un array de strings con el nombre y tiempo jugado de cada juego filtrado anteriormente
Ej:
```js
[
  "El juego Super Meat Boy se jugo por 10 horas",
  "El juego Celeste se jugo por 35 horas"
]
```
Usando la operacion reduce y los datos filtrados previamente, devuelve la cantidad total de minutos jugados
