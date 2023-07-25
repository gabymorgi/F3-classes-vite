# Clase State-II

<details>
<summary style="font-size:28px">Teoria</summary>

---

Lee la siguiente documentacion:

- [Objetos y estados](https://react.dev/learn/updating-objects-in-state)

- [Arreglos y estados](https://react.dev/learn/updating-arrays-in-state)

- [uso general y ejemplos](https://react.dev/reference/react/useState)

Comienza a leer el archivo `App.jsx`, intenta entender el flujo de renderizado, el funcionamiento, y como se relacionan los componentes entre si.

- Aprende como guardar arreglo u objetos en el estado

- Recuerda la importancia de la inmutabilidad

  - Si no cambiamos la referencia de un objeto o arreglo, React no se da cuenta que cambio el estado y no vuelve a renderizar el componente.

- Recuerda las reglas de las keys

  - Deben ser unicas entre los elementos de la lista.

  - Deben ser estables en el tiempo.

  - Lee [esta diapositiva](https://docs.google.com/presentation/d/1wzm_RVG_BOkqLepk3SZc05foGViA1bkzepCBY6Mwvuc/edit?usp=sharing) para tener una mejor idea.

- Entiende como podemos generar ids unicos para cada elemento de una lista.

  - Ten en mente que esta no es la mejor forma de generar ids unicos, pero es la mas sencilla de entender.

---

Si quieres, puedes ver el ejercicio con el que trabajaremos durante la clase [aqui](/src/clases/08-state-II/teoria/App.jsx)
</details>
<details>
<summary style="font-size:28px">Practica</summary>

---

Usando estos [datos](/src/fakeApi/accounts.json)

Crea una app que muestra

1. un componente con todas las cuentas que estas siguiendo

2. un componente con todas las cuentas disponibles:

3. cuando haces click en una cuenta:

    - si la cuenta no esta en la lista, se agrega 

    - si la cuenta ya esta en la lista, no se agrega

    > TIP: puedes user el metodo [includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) para saber si la cuenta ya esta en la lista

4. cuando se hace click en una cuenta que estas siguiendo: 

    - se elimina de la lista de cuentas que estas siguiendo

    > TIP: puedes usar el metodo [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) para eliminar un elemento de la lista

---

Puedes ver la resolucion [aqui](/src/clases/08-state-II/practica/App.jsx)
</details>
<details>
<summary style="font-size:28px">Integrador</summary>

- Mostrar una lista de lenguajes favoritos.

Cuando se selecciona uno, se debe mostrar un indicador en todas las cards de repos que tengan ese lenguaje como principal

La lista de lenguajes la sacaremos de ghLanguages.json

</details>