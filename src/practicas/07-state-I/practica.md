# Practica clase 7!

### Practica de State con datos simples

1. Crea un componente Calculadora que muestre un texto con un valor inicial en 0

2. Crea 4 botones con la siguiente funcionalidad:
- al presionar el botón `+` el valor del texto aumenta en 1
- al presionar el botón `-` el valor del texto disminuye en 1
- al presionar el botón `reset”`el valor del texto se pone en 0
- al presionar el boton `=` se muestra por consola el valor actual del texto

3. Modifique el componente Calculadora con lo siguiente
  - recibira una prop amount que sera el valor por el que se incrementara o decrementar cada vez que se apreta en `+` o `-`
  - recibira una prop `onEqual` que sera una funcion que se ejecutara cuando se aprete en `=`

4. Agregue en App lo siguiente
  - 3 componentes `Calculadora`, la primera incrementara de a 1, la segunda de a 5, y la tercera de a 13
  - un estado `sum` de tipo number
  - cuando se aprete en `=` en cualquiera de las calculadoras,
    se debe incrementar `sum` con el total de la calculadora
  - mostrar el valor de `sum` en la App
  