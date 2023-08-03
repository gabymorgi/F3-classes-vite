# Clase Entorno

<details>
<summary style="font-size:28px">Teoria</summary>

---

## Archivos y Carpetas de un Proyecto

### package.json vs package-lock.json
El archivo `package.json` es un archivo clave en cualquier aplicación de Node.js. Contiene metadatos sobre el proyecto, como el nombre, la versión y las dependencias (otros paquetes que necesita para funcionar correctamente).

Por otro lado, `package-lock.json` es un archivo generado automáticamente que registra la versión exacta de cada dependencia instalada en tu proyecto. Esto asegura que todas las instalaciones del proyecto usen las mismas versiones de las dependencias, evitando posibles errores debido a diferencias de versiones.

### node_modules folder
La carpeta `node_modules` es donde NPM instala todas las dependencias del proyecto. Cada paquete que se añade como dependencia en `package.json` será instalado en esta carpeta.

### src
`src` es la carpeta donde generalmente se almacena todo el código fuente de la aplicación.

### index.html
`index.html` es el archivo principal de HTML que se sirve en el navegador. Es el punto de entrada a la aplicación web, solo va a contener un div que accederemos en `main.jsx`.

### public folder
La carpeta `public` se utiliza para almacenar archivos estáticos que se pueden servir directamente, como imágenes y favicons.

### main.js
`main.js` es el archivo JavaScript principal donde se inicializa la aplicación React. Aqui se selecciona el elemento `root` del DOM que declaramos en `index.html` para montar la aplicación React.

### StrictMode
`StrictMode` es un componente de ayuda en React que se usa para resaltar posibles problemas en la aplicación durante el desarrollo. Esto provoca que los componentes se rendericen dos veces, por lo que pueden desactivarlo cuando veamos ciclos de vida.

## Herramientas

### Prettier
Prettier es una herramienta de formateo de código que asegura la consistencia del código en todo el proyecto. Formatea el código automáticamente según las reglas especificadas.

Es una extensión de VS Code.

### ESLint
ESLint es una herramienta de linting para JavaScript. Ayuda a mantener la calidad del código identificando y reportando patrones de código problemáticos.

### TypeScript
TypeScript es un lenguaje de programación que es una superconjunto de JavaScript. Añade tipos estáticos a JavaScript, lo que puede ayudar a prevenir muchos errores comunes en el desarrollo de JavaScript. **Lamentablemente** se escapa del alcance de este curso, pero es una herramienta muy útil para proyectos grandes.

> recuerda consultar la documentacion oficial si quieres saber mas o no recuerdas algo
>
> [Empezando en Vite](https://vitejs.dev/guide/)
>
> [Control de Codigo VS code](https://code.visualstudio.com/docs/sourcecontrol/overview)
>
> [Crear Proyectos en GitHub](https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github)

---

Si quieres, puedes ver el ejercicio con el que trabajaremos durante la clase [aqui](/src/clases/02-datos/teoria/App.jsx)
</details>
<details>
<summary style="font-size:28px">Practica</summary>

---

### Crear un nuevo proyecto con Vite

Para crear un nuevo proyecto con Vite, sigue los siguientes pasos:

1. Visita la página de documentación de [Vite](https://vitejs.dev/guide/)

2. Sigue las instrucciones para instalar Vite

3. Crea un nuevo proyecto con el comando

    ```
    npm  create  vite@latest  my-app  --  --template  react
    ```

4. Instala las dependencias con

    ```
    npm i
    ```

5. Inicia el proyecto con

    ```
    npm run dev
    ```

---

### Practica de github

1. Crea un nuevo repositorio en [Github](https://github.com)

2. Sube el proyecto a github
    
    > Asegurate de que el `.gitingore` contenga `node_modules`

   ```bash
    git init
    git add .
    git commit -m "first commit"
    git branch -M main
    git remote add origin [repo url]
    git push -u origin main
    ```

3. Realiza cambios en algun archivo y fijate como se visualiza en el source control de vscode

4. Agrega un nuevo archivo `.env` en el root (a la altura del package.json) y vuelve a observar los cambios

5. Agrega `.env` al `.gitignore` y vuelve a observar los cambios

---

### Practica de ESLint

1. Instala la extension de ESLint en vscode

2. Instala [ESLint](https://eslint.org/docs/latest/use/getting-started)
`npm init @eslint/config`

    **How would you like to use ESLint?** To check syntax and find problems

    **What type of modules does your project use?** JavaScript modules (import/export)

    **Which framework does your project use?** React

    **Does your project use TypeScript?** No

    **Where does your code run?** Browser

    **What format do you want your config file to be in?** JSON


3. Mira el archivo App. Tendra errores :(

    - Deshabilita la regla `react/react-in-jsx-scope`

    - Para eso, ve al archivo `.eslintrc.json` y agrega la siguiente linea en `rules`

        ```
        "react/react-in-jsx-scope": "off"
        ```

4. Vuelve a mirar el archivo App. los anchors tendran errores ahora.

    - si no ves esto agrega el siguiente codigo

      ```html
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      ```

     - Si hovereas sobre el error veras que te dice que no se puede usar `target="_blank"` sin `rel="noopener noreferrer"`, puedes hacer click en el error si quieres mas informacion.

5. Resuelve el error agregando `rel="noopener noreferrer"` al anchor

6. Declara una variable y no la uses, mira el error que te da eslint

7. Escribe el siguiente codigo y mira el error que te da eslint

    ```js
    <CustomComponent />
    ```

8. Escribe el siguiente codigo y mira el error que te da eslint

    ```js
    const ovgekt = {
      neim: 'nonvre'
      heda  25,
    }
    ```

---

### Practica de dependencias

1. Instala la siguiente dependencia [is-odd](https://www.npmjs.com/package/is-odd)

    ```
    npm i is-odd
    ```

2. Utiliza la biblioteca en el proyecto

    ```
    import isOdd from 'is-odd';
    console.log(isOdd(1)); //=true
    ```

---

Puedes ver la resolucion [aqui](/src/clases/02-datos/practica/App.jsx)
</details>
<details>
<summary style="font-size:28px">Integrador</summary>

1. Crear un proyecto nuevo con Vite

2. Crear una carpeta con todos los datos mockeados necesarios para trabajar en las siguientes clases:

[user](/src/fakeApi/ghUser.json)
[repos](/src/fakeApi/ghRepos.json)
[repoList](/src/fakeApi/ghRepoDetail.json)
[repoLanguages](/src/fakeApi/ghLanguages.json)

3. Crear una carpeta utils con las funciones creadas en la clase anterior

</details>