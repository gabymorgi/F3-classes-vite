# Practica clase 15!

### Memo ejercicio 1

Crea una App con lo siguiente
  
1. Tres inputs type number controlados

2. utiliza `useMemo` que muestre la suma de los primeros 2 inputs

    **el memo no se debe recalcular si el tercer input se modifica**

3. Crea una Componente `Products` con lo siguiente

    -  Con `useMemo` muestra en pantalla todos los productos que tengan un precio mayor a 50

    - usa la siguiente [data](/src/fakeApi/products.json)

      **el memo no debe recalcularse**

5. Crea un componente `Books` con lo siguiente

     - un select con los siguientes valores: `["Roshar", "Skadrial", "Nalthis", "Threnody"]`

     - Con `useMemo` muestra todos los libros que transcurran en el planeta seleccionado

        usa la siguiente [data](/src/fakeApi/books.json)

        **el memo solo deben recalcularse si el select cambia**
