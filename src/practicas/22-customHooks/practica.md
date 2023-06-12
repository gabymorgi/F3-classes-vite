# Practica clase 22!

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
