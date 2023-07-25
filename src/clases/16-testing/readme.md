# Clase X

<details>
<summary style="font-size:28px">Teoria</summary>

---

Comienza a leer el archivo `sum.test.js`.

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

Opcionalmente, puedes leer la siguiente documentacion:

- [Vitest](https://vitest.dev/api/expect.html)

- [Prioridad de queries en Testing Library](https://testing-library.com/docs/queries/about/#priority)

---

Si quieres, puedes ver el ejercicio con el que trabajaremos durante la clase [aqui](/src/clases/16-testing/teoria/App.jsx)
</details>
<details>
<summary style="font-size:28px">Practica</summary>

---

### Ejercicio 1: configuracion de entorno

1. Instale las dependencias de **desarrollo** `vitest`, `@testing-library/react` y `jsdom`

2. Configure el archivo `vite.config.js` para que use `jsdom` como entorno de testeo.

    Agregar la siguiente linea al archivo:

    ```js
    // vite.config.js
    export default defineConfig({
      // ...
      test: {
        globals: true,
        environment: 'jsdom',
      }
    })
    ```

3. Modifique el `package.json` para que ejecute los tests con `vitest`

  ```json
  // package.json
  {
    // ...
    "scripts": {
      // ...
      "test": "vitest"
    }
  }
  ```

4. Cree un test de prueba para verificar que todo este funcionando correctamente

    ```js
    // src/App.test.js
    import { render, screen } from '@testing-library/react'
    import App from './App'

    test('renders learn react link', () => {
      render(<App />)
      expect(true).toBeTruthy()
    })
    ```

### Ejercicio 2: Proper practice

cree los siguientes test, y adapte la aplicacion de acuerdo a los mismos:

1. La app debe tener un titulo que diga `Cookie Clicker`

2. La app debe tener un boton que diga `Click me!`

3. La app debe tener un contador que diga `0`

4. La app debe incrementar el contador en 1 cada vez que se presiona el boton

5. La app debe tener un boton que diga `Ascend`

6. El boton `Ascend` debe estar deshabilitado cuando el contador es menor a 10

7. La app recibe un parametro opcional que es una funcion que se ejecuta cuando se presiona el boton `Ascend`

---

Puedes ver la resolucion [aqui](/src/clases/16-testing/practica/App.jsx)
</details>
<details>
<summary style="font-size:28px">Integrador</summary>

1. Probar componente lenguajes favs

  - se tiene que renderizar

  - la cantidad de items tiene que ser igual a la de los lenguajes enviados

  - si se el envia una fav, tiene que estar primary

  - on click tiene que llamar a la funcion enviada

</details>