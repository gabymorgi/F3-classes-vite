# Teoria clase 21!

- Comienza a leer el archivo `App.jsx`, intenta entender el flujo de renderizado, el funcionamiento, y como se relacionan los componentes entre si.

- Aprende la sintaxis para crear un `reducer`.

  - El primer parametro es la funcion que gestiona el cambio de estado.

  - El segundo parametro es el estado inicial.

  - El tercer parametro es una funcion que calcula el estado inicial. Es opcional.

- Observa como nos abstraemos de la logica de gestionar el estado, y como solo nos preocupamos de saber el tipo de accion que queremos realizar. 

  - En el componente `Calculator.jsx` solo nos preocupamos de saber si queremos sumar, restar, multiplicar o dividir, y de los parametros que necesita. Pero no nos preocupamos de como se realiza la operacion.

  - La funcion `calcReducer` se encarga de gestionar el estado, y de realizar la operacion, a partir de la accion que le pasamos.

- Recuerda que el `reducer` nos permite simplificar la logica de gestionar un estado muy complejo.

Luego puedes ir a resolver la practica.

> recuerda consultar la [documentacion](/doc/externalLinks.md#clase-21-reducer) si quieres saber mas sobre alguna instruccion
