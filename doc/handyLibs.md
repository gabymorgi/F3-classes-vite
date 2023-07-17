# Librerias que uso frecuentemente

---

## [antd](https://ant.design/)

Si no hay designer, o no queres estar 3 milenios poniendole <span style="color:red">c</span><span style="color:orange">o</span><span style="color:yellow">l</span><span style="color:green">o</span><span style="color:blue">r</span><span style="color:indigo">i</span><span style="color:violet">n</span><span style="color:red">e</span><span style="color:orange">s</span> a un boton, esta es tu lib.

No solo es una libreria de estilos:

 - Card

 - Botones

 - Iconos

sino que tiene componentes funcionales:

 - Formularios
 
 - Notificaciones
 
 - Mensajes
 
 - Modales

**alternativas**:

[material design](https://m3.material.io/) es muy utilizado tambien y mas <span style="color:red">b</span><span style="color:orange">o</span><span style="color:yellow">n</span><span style="color:green">i</span><span style="color:blue">c</span><span style="color:violet">o</span>, pero solo tiene estilos y no funcionalidades 🙃
  
[formik](https://formik.org/): es solo para forms

toastify: es solo para notifications

[@mdi/react](https://pictogrammers.com/library/mdi/):

Los iconos de ant son bastante feos. esta lib tiene iconos to' <span style="color:red">b</span><span style="color:orange">o</span><span style="color:yellow">n</span><span style="color:green">i</span><span style="color:blue">c</span><span style="color:indigo">o</span><span style="color:violet">s</span>

## [date-fns](https://date-fns.org/)

Libreria liviana para manejar fechas (no soporta timezones)

**alternativa**

[datejs](https://www.npmjs.com/package/datejs): nunca lo use xd, pero antd lo usa


## [react-responsive](https://www.npmjs.com/package/react-responsive)

Te permite hacer mediaqueries en JSX a traves de hooks.

## [styled-components](https://styled-components.com/)

Css en JSX. Permite pasar props a css, entre otras cosas

**alternativas**

[emotion](https://emotion.sh/docs/introduction)

## [Tailwind](https://tailwindcss.com/)

Atomic css

## [use-debounce](https://www.npmjs.com/package/use-debounce)

Impide llamar a una funcion muchas veces seguidas

## [use-query-params](https://www.npmjs.com/package/use-query-params)

Corre arriba de react router, hace mas amigable el manejo de search params


## [uuid](https://github.com/uuidjs/uuid)

Para crear ids

## [SVGOMG](https://svgomg.net/)
para simplificar svg y hacerlos mas livianos. Muchas veces figma y los designers nos mandan svg con cosas extra sin darle mucha bola al tamaño

transforma esta cosa asquerosa

```html
<svg
  width="26px"
  height="26px"
  viewBox="0 0 26 26"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <title>ico-close</title>
  <g
    id="Campaign-Overview"
    stroke="none"
    stroke-width="1"
    fill="none"
    fill-rule="evenodd"
  >
    <g
      id="TABS---Edit-confirmation---loose-Duplicate"
      transform="translate(-1010.000000, -356.000000)"
      stroke="#74767E"
      stroke-width="3"
    >
      <g
        id="Group-5"
        transform="translate(387.000000, 337.000000)"
      >
        <g
          id="Combined-Shape-2"
          transform="translate(623.000000, 19.000000)"
        >
          <path
            d="M1.33333333,1.33333333 L24.6666667,24.6666667 M24.6666667,1.33333333 L1.33333333,24.6666667"
            id="Combined-Shape"
          />
        </g>
      </g>
    </g>
  </g>
</svg>
```

en esta cosa hermosa

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width="10" height="10">
  <path fill="none" fill-rule="evenodd" stroke="#74767E" stroke-width="3" d="m1.3 1.3 23.4 23.4m0-23.4L1.3 24.7"/>
</svg>
```

## Recomendacion de la recomendacion

Te dejo tambien las [librerias recomendadas por ant design](https://ant.design/docs/react/recommendation?theme=dark), que, segun su riterio, tienen gran calidad y siguen sus estandares.
