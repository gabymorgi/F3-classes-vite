# Teoria clase 9!

- Comienza a leer el archivo `App.jsx`, intenta entender el flujo de renderizado, el funcionamiento, y como se relacionan los componentes entre si.

- Observa como usamos un estado para guardar el valor de los inputs.

- Examina como pasamos las props `value` y `onChange` a los inputs para que sean controlados.

- Observa como usamos el evento `onSubmit` para prevenir que se recargue la pagina al enviar el formulario.

- Analiza como realizamos la validacion de los campos del formulario.

- Observa como usamos un estado adicional para guardar los errores de validacion, y como evitamos que se envie el formulario si hay errores.

- Observa como usamos un estado adicional para guardar el estado de envio del formulario, si no hay errores.

- Recuerda que cada vez que se cambia el estado, se vuelve a renderizar el componente.

  - Es decir, cada vez que el usuario escribe en un input, se vuelve a renderizar el componente.

  - Por esto deberiamos encapsular el formulario en un componente, para que no se vuelva a renderizar todo el componente `App` cada vez que el usuario escribe en un input.

Luego puedes ir a resolver la practica.

> recuerda consultar la [documentacion](/doc/externalLinks.md#clase-9-forms) si quieres saber mas sobre alguna instruccion
