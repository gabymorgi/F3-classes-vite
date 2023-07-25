# Clase X

<details>
<summary style="font-size:28px">Teoria</summary>

---

Lee la siguiente documentacion

- [Componentes controlados](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)

Comienza a leer el archivo `App.jsx`, intenta entender el flujo de renderizado, el funcionamiento, y como se relacionan los componentes entre si.

- Observa como usamos un estado para guardar el valor de los inputs.

- Examina como pasamos las props `value` y `onChange` a los inputs para que sean controlados.

- Observa como usamos el evento `onSubmit` para prevenir que se recargue la pagina al enviar el formulario.

- Analiza como realizamos la validacion de los campos del formulario.

- Observa como usamos un estado adicional para guardar los errores de validacion, y como evitamos que se envie el formulario si hay errores.

- Observa como usamos un estado adicional para guardar el estado de envio del formulario, si no hay errores.

- Recuerda que cada vez que se cambia el estado, se vuelve a renderizar el componente.

  - Es decir, cada vez que el usuario escribe en un input, se vuelve a renderizar el componente.

  - Por esto deberiamos encapsular el formulario en un componente, para que no se vuelva a renderizar todo el componente `App` cada vez que el usuario escribe en un input.

---

Si quieres, puedes ver el ejercicio con el que trabajaremos durante la clase [aqui](/src/clases/09-forms/teoria/App.jsx)
</details>
<details>
<summary style="font-size:28px">Practica</summary>

---

1. Cree un formulario que solicite al usuario su numero favorito:
  
    - cuando se apreta en el boton submit:
  
      -  mostrar en pantalla `tu numero favorito es: ${numero}`
    
          - el mensaje debe aparecer en el DOM, **no se permiten alerts**.

          - el mensaje **no debe aparecer** antes de que se aprete el boton submit.

          - el mensaje **no se debe modificar** mientras el usuario escribe.

2. Agregar al formulario anterior una validacion que verifique que el numero ingresado sea mayor a 0.

    - si no lo es, **se debera mostrar en pantalla** un mensaje de error.

    - el mensaje de error debe aparecer en el DOM, **no se permiten alerts**.

3. Agregue al formulario anterior un input para que el usuario ingrese su nombre:

    - el nombre no debe ser vacio

4. Modificar el estado de submit para que sea un arreglo.

    - Cada vez que se apreta el boton submit
    
      - se debe agregar un objeto con el nombre y el numero al arreglo.
      
      - El arreglo debe ser mostrado en pantalla.

---

Puedes ver la resolucion [aqui](/src/clases/09-forms/practica/App.jsx)
</details>
<details>
<summary style="font-size:28px">Integrador</summary>

1. Crear un formulario que permita ingresar un string, que sera el nombre de usuario.

Al hacer click en login, imprimir por consola el valor ingresado


2. Crear formulario en el componente repolist, que permita ingresar un metodo de ordenamiento y una direccion

- sort: es un select con los siguientes valores: created, updated, pushed, full_name

- direction: es un select con los siguientes valores: asc, desc

cuando se apreta en el boton order se muestra por consola los valores ingresados

</details>