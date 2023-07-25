# Clase X

<details>
<summary style="font-size:28px">Teoria</summary>

---

Lee la siguiente documentacion:

- [uso general y ejemplos](https://react.dev/reference/react/useMemo)

Comienza a leer el archivo `App.jsx`, intenta entender el flujo de renderizado, el funcionamiento, y como se relacionan los componentes entre si.

- Aprende la sintaxis de `useMemo`

  - Recuerda que el primer parametro es una funcion, que se ejecutara cuando el componente se monte, y cada vez que cambie el valor de alguna de las dependencias. Y que el valor de retorno de la funcion, sera el valor que se guarde en la variable.

  - El segundo parametro es un array de dependencias, que le indica a React que debe ejecutar la funcion del primer parametro, solo cuando cambie el valor de alguna de las dependencias.

- Observa como evitamos calculos innecesarios con `useMemo` cuando cambian props que **no** son dependencias, o cuando se renderiza el componente debido a un cambio de estado en el componente padre.

---

Si quieres, puedes ver el ejercicio con el que trabajaremos durante la clase [aqui](/src/clases/13-memo/teoria/App.jsx)

</details>
<details>
<summary style="font-size:28px">Practica</summary>

---

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

---

Puedes ver la resolucion [aqui](/src/clases/13-memo/practica/App.jsx)

> **Lecturas Avanzadas:**
>
> 2ez?, puedes leer las siguientes lecturas avanzadas:
>
> - [memoizando funciones](https://react.dev/reference/react/useCallback)
>
> - [memoizando componentes](https://react.dev/reference/react/memo)
</details>
<details>
<summary style="font-size:28px">Integrador</summary>

Guardar en memo el calculo de porcentage de repos

</details>