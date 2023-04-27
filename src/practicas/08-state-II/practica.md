# Practica clase 8!

### Practica de State con Arreglos

puedes usar estos datos

```js
const usuarios = [
  { id: "1", nombre: "john", edad: 25, email: "john@egbert.com"},
  { id: "2", nombre: "rose", edad: 27, email: "rose@lalonde.com"},
  { id: "3", nombre: "dave", edad: 25, email: "dave@strider.com"},
  { id: "4", nombre: "jade", edad: 28, email: "jade@harley.com"},
  { id: "5", nombre: "karkat", edad: 29, email: "karkat@vantas.com"},
  { id: "6", nombre: "tavros", edad: 31, email: "tavros@nitram.com"},
  { id: "7", nombre: "sollux", edad: 35, email: "sollux@captor.com"},
  { id: "8", nombre: "nepeta", edad: 32, email: "nepeta@leijon.com"},
  { id: "9", nombre: "kanaya", edad: 45, email: "kanaya@maryam.com"},
  { id: "10", nombre: "terezi", edad: 52, email: "terezi@pyrope.com"},
  { id: "11", nombre: "tavros", edad: 21, email: "vriska@serket.com"},
  { id: "12", nombre: "equius", edad: 18, email: "equius@zahhak.com"},
  { id: "13", nombre: "gamzee", edad: 18, email: "gamzee@makara.com"},
  { id: "14", nombre: "eridan", edad: 32, email: "eridan@ampora.com"},
  { id: "15", nombre: "feferi", edad: 34, email: "feferi@peixes.com"},
  { id: "16", nombre: "aradia", edad: 33, email: "aradia@medigo.com"},
]
```

Crea una app que muestra

1. un componente con todas las cuentas que estas siguiendo

2. un componente con todas las cuentas disponibles:

3. cuando haces click en una cuenta, se agrega a la lista de cuentas que estas siguiendo
  si la cuenta no esta en la lista, se agrega 
  si la cuenta ya esta en la lista, no se agrega

> TIP: puedes user el metodo [includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) para saber si la cuenta ya esta en la lista

4. cuando se hace click en una cuenta que estas siguiendo, se elimina de la lista de cuentas que estas siguiendo

> TIP: puedes usar el metodo [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) para eliminar un elemento de la lista
