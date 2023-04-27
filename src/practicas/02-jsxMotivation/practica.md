# Practica clase 2!

### Crear un nuevo proyecto con Vite

Para crear un nuevo proyecto con Vite, sigue los siguientes pasos:

1. Visita la página de documentación de [Vite](https://vitejs.dev/guide/)
2. Sigue las instrucciones para instalar Vite
3. Crea un nuevo proyecto con el comando `npm  create  vite@latest  my-app  --  --template  react`
4. Instala las dependencias con `npm i`
5. Inicia el proyecto con `npm run dev`

---

### Renderizar elementos en la app

dentro de App renderiza los siguientes elementos
1. un h1 con el titulo de una pelicula
2. un p con la descripcion de la pelicula
3. un botton para darle like a la pelicula (cuando se hace click tiene que mostrar `'like'` por consola)

---

### Crear un componente con props

1. Crea una función o componente que reciba `title` como props.
2. La función o componente debe renderizar un `h3` con el valor de `title`.
3. Prueba el comportamiento de la función o componente con los siguientes ejemplos:

```jsx
<NombreComponente title="Géneros" />
<NombreComponente title="Actores" />
```

---

### Crear un componente con children

1. Crea una función o componente que reciba `children` como props.
2. La función o componente debe renderizar un `ul` y dentro de él, el valor de `children`.
3. Prueba el comportamiento de la función o componente con los siguientes ejemplos:

```jsx
<ComponenteLista>
  <li>Acción</li>
  <li>Romance</li>
  <li>Drama</li>
</ComponenteLista>

<ComponenteLista>
  <li>Leonardo DiCaprio</li>
  <li>Brad Pitt</li>
  <li>Tom Cruise</li>
  <li>Will Smith</li>
  <li>Julia Roberts</li>
  <li>Angelina Jolie</li>
  <li>Meryl Streep</li>
  <li>Scarlett Johansson</li>
</ComponenteLista>
```
