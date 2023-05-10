# Conceptos de Proyectos Vite + React

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

### ESLint
ESLint es una herramienta de linting para JavaScript. Ayuda a mantener la calidad del código identificando y reportando patrones de código problemáticos.

### TypeScript
TypeScript es un lenguaje de programación que es una superconjunto de JavaScript. Añade tipos estáticos a JavaScript, lo que puede ayudar a prevenir muchos errores comunes en el desarrollo de JavaScript. **Lamentablemente** se escapa del alcance de este curso, pero es una herramienta muy útil para proyectos grandes.