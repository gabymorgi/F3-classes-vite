# Clase X

<details>
<summary style="font-size:28px">Teoria</summary>

---

Lee la siguiente documentacion:

- [Empezando con React Router](https://reactrouter.com/en/main/start/tutorial)

- [repo con ejemplos](https://github.com/remix-run/react-router/tree/dev/examples/basic)

Comienza a leer el archivo `App.jsx`, intenta entender el flujo de renderizado, el funcionamiento, y como se relacionan los componentes entre si.

- Aprende la sintaxis de `react-router-dom`

  - `BrowserRouter` es un componente que debe envolver a toda la aplicacion, y que nos permite utilizar las rutas.

  - `Routes` es un componente que envuelve componentes `Route`.

  - `Route` es un componente que nos permite renderizar un componente cuando la ruta coincida con la ruta actual.

  - `Link` es un componente que nos permite crear un enlace a otra ruta, evitando que se recargue la pagina.

- Observa como utilizamos `Outlet` para renderizar rutas hijas.

---

Si quieres, puedes ver el ejercicio con el que trabajaremos durante la clase [aqui](/src/clases/14-router-I/teoria/App.jsx)
</details>
<details>
<summary style="font-size:28px">Practica</summary>

---

### Instalacion

- Ejecuta `npm install react-router-dom`

- Agrega el `BrowserRouter` en el `main` de tu app

### React Router con rutas estaticas

1. Crea una app con las siguientes seccines
  
```
|-inicio
|-shorts
|-suscripciones
|-explorar
  |-tendencias
  |-musica
  |-peliculas
```

2. Un header nos acompaña en todo momento, permitiendonos navegar a `inicio`, `shorts`, `suscripciones` y `explorar`

3. En el componente de la seccion `explorar`
  
    - en todas las subsecciones hay un h1 con el label `explorar`

    - en el `index` de la seccion hay 1 boton que redirige a cada subseccion

---

Puedes ver la resolucion [aqui](/src/clases/14-router-I/practica/App.jsx)
</details>
<details>
<summary style="font-size:28px">Integrador</summary>

1. Crear estructura de rutas

- login

  - info

  - list

2. Modificar la funcion de login, para que redirija al home si el usuario ingresado es correcto

Crear rutas protegidas para que si no hay usuario, redirija al login

3. Refactorizar los links internos para que usen router

4. Refactorizar estructura de rutas para que el header este presente en todas las secciones excepto el login (sin replicar el componente en cada seccion)

</details>