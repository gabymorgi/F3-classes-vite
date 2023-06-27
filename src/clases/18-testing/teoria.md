# Teoria clase 18!

- Comienza a leer el archivo `sum.test.js`.

- Observa la sintaxis de los tests.

  - Observa como se utiliza `describe` para agrupar tests.

  - Observa como se utiliza `it` o `test` para definir un test.

  - Observa como se utiliza `expect` para definir una asercion.

  - Observa como utilizamos matchers para definir la asercion.

- Ahora observa el archivo `App.test.js`.

  - Observa como se utiliza `render` para renderizar un componente.

  - Observa como se utiliza `screen` para obtener elementos del DOM.

  - Observa como se utiliza `fireEvent` para simular eventos.

- Recuerda que queremos que los test sean independientes. Por lo tanto, no queremos que puedan hacer fetch a la API. Para eso vamos a utilizar `jest.mock` para mockear el modulo `window.fetch`. Lo mismo con las props y funciones que recibe el componente.

Luego puedes ir a resolver la practica.

> recuerda consultar la [documentacion](/doc/externalLinks.md#clase-18-testing) si quieres saber mas sobre alguna instruccion
