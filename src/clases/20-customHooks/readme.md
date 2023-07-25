# Clase X

<details>
<summary style="font-size:28px">Teoria</summary>

---

Lee la siguiente documentacion:

- [Reutilizando logica con hooks personalizados](https://react.dev/learn/reusing-logic-with-custom-hooks)

Comienza a leer el archivo `App.jsx`, intenta entender el flujo de renderizado, el funcionamiento, y como se relacionan los componentes entre si.

- Aprende la sintaxis para crear un `custom hook`.

  - Los `custom hooks`, al igual que cualquier funcion comun y corriente, nos permiten abstraernos de la logica de un componente, y reutilizarla en otros componentes. La diferencia es que usan `hooks` dentro de ellos.

  - Por convencion, los `custom hooks` siempre deben comenzar con la palabra `use`. 

  - Los `custom hooks` pueden recibir parametros.

  - Los `custom hooks` pueden devolver cualquier tipo de dato.

- Observa como usamos un unico hook `useFetch` para no tener que escribir en cada componente que necesite una api, la logica de `fetch` y el estado de `loading` y `error`.

---

Si quieres, puedes ver el ejercicio con el que trabajaremos durante la clase [aqui](/src/clases/20-customHooks/teoria/App.jsx)
</details>
<details>
<summary style="font-size:28px">Practica</summary>

---

### Custom Hook Ejercicio 1

crea un hook `useLocalStorage` que permita guardar y obtener datos del localStorage

1. el hook debe recibir una key

2. el hook debe devolver un array con el valor y una funcion para actualizarlo

    **Que pasa si dos componentes usan el mismo hook con la misma key?**

    > TIP: setItem no es reactivo, por lo que si dos componentes usan el mismo hook con la misma key, no se actualizara el valor en el otro componente

---

### Custom Hook Ejercicio 2

crea un hook useLocation que permita manejar los datos de [paises](/src/fakeApi/paises.json) y [provincias](/src/fakeApi/provincias.json)

El hook devolvera

1. country: el pais seleccionado

2. province: la provincia seleccionada

3. countriesList: la lista de todos paises

4. provincesList: la lista de provincias del pais seleccionado

5. handleCountryChange: funcion para actualizar el pais seleccionado

6. handleProvinceChange: funcion para actualizar la provincia seleccionada

---

Puedes ver la resolucion [aqui](/src/clases/20-customHooks/practica/App.jsx)
</details>
<details>
<summary style="font-size:28px">Integrador</summary>

UseFetch para traer los datos de la api

</details>