# Practica clase 7!

### Practica de State con datos simples

1. Crea un componente Calculadora que muestre un texto con un valor inicial en 0

2. Agrega al componente Calculadora 4 botones con la siguiente funcionalidad:

    - Al presionar el botón `+` el valor del texto aumenta en 1

    - Al presionar el botón `-` el valor del texto disminuye en 1

    - Al presionar el botón `reset”`el valor del texto se pone en 0

    - Al presionar el boton `=` se muestra por consola el valor actual del texto

3. Modifique el componente Calculadora con lo siguiente:

    - Recibira una prop amount que sera el valor por el que se incrementara o decrementar cada vez que se apreta en `+` o `-`

    - Recibira una prop `onEqual` que sera una funcion que se ejecutara cuando se aprete en `=`

4. Agregue en App lo siguiente:

    - 3 componentes `Calculadora`, la primera incrementara de a 1, la segunda de a 5, y la tercera de a 13

    - Un estado `sum` de tipo number

    - Cuando se aprete en `=` en cualquiera de las calculadoras:

      - se debe incrementar `sum` con el total de la calculadora

      - mostrar el valor de `sum` en la App
  