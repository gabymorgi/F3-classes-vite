# Practica clase 6!

### Practica de key y map

muestra las siguiente lista de elementos utilizando el metodo map
intenta utilizar en cada caso, la key que consideras mas apropiada en cada caso

1. Muestra la lista de productos con su nombre, precio y descripcion

```js
const productos = [
  {
    id: 1,
    nombre: "Camisa de algodón",
    precio: 29.99,
    descripcion: "Camisa de algodón suave y cómoda para uso diario."
  },
  {
    id: 2,
    nombre: "Vaqueros ajustados",
    precio: 49.99,
    descripcion: "Vaqueros ajustados y modernos para cualquier ocasión."
  },
  {
    id: 3,
    nombre: "Zapatillas deportivas",
    precio: 69.99,
    descripcion: "Zapatillas deportivas cómodas y ligeras para entrenamientos intensos."
  },
  {
    id: 4,
    nombre: "Pantalones de vestir",
    precio: 59.99,
    descripcion: "Pantalones de vestir elegantes y cómodos para ocasiones especiales."
  },
  {
    id: 5,
    nombre: "Jersey de lana",
    precio: 39.99,
    descripcion: "Jersey de lana suave y cálido para los días más fríos."
  },
  {
    id: 6,
    nombre: "Botas de invierno",
    precio: 89.99,
    descripcion: "Botas de invierno impermeables y resistentes para las condiciones más extremas."
  },
  {
    id: 7,
    nombre: "Chaqueta de cuero",
    precio: 149.99,
    descripcion: "Chaqueta de cuero elegante y duradera para cualquier look."
  },
  {
    id: 8,
    nombre: "Sudadera con capucha",
    precio: 44.99,
    descripcion: "Sudadera con capucha y bolsillo canguro para un look casual y cómodo."
  },
  {
    id: 9,
    nombre: "Abrigo de lana",
    precio: 99.99,
    descripcion: "Abrigo de lana suave y cálido para un look invernal elegante."
  },
  {
    id: 10,
    nombre: "Polo clásico",
    precio: 29.99,
    descripcion: "Polo clásico y elegante para cualquier ocasión."
  },
  {
    id: 11,
    nombre: "Chaqueta de cuero",
    precio: 139.99,
    descripcion: "Chaqueta de cuero elegante y duradera para cualquier look."
  },
];
```

2. Muestra la lista de links que muestren el nombre del usuario y redirijan a `https://twitter.com/${account}`

```js
const cuentas = [
  { account: "elonmusk", userName: "Elon Musk" },
  { account: "BarackObama", userName: "Barack Obama" },
  { account: "BillGates", userName: "Bill Gates" },
  { account: "Oprah", userName: "Oprah Winfrey" },
  { account: "TheEllenShow", userName: "Ellen DeGeneres" },
  { account: "KimKardashian", userName: "Kim Kardashian" },
  { account: "donaldTrump", userName: "Donald Trump" },
  { account: "realDonaldTrump", userName: "Donald Trump" },
  { account: "NYTimes", userName: "The New York Times" },
  { account: "CNN", userName: "CNN" },
  { account: "BBCWorld", userName: "BBC News (World)" },
  { account: "NASA", userName: "NASA" },
  { account: "NatGeo", userName: "National Geographic" },
  { account: "UberFacts", userName: "UberFacts" },
  { account: "realDonaldTrumpNoFake", userName: "Donald Trump" },
];
```

3. Muestra la lista de usuarios con su apodo, y la lista de sus mascotas con el formato `${nombre} (${edad}): ${color}`

```js
const usuarios = [
  {
    apodo: "Nepeta",
    email: "nepetalover123@gmail.com",
    mascotas: [
      { nombre: "Luna", edad: 3, color: "blanco y negro" },
      { nombre: "Simba", edad: 1, color: "naranja" },
      { nombre: "Mia", edad: 5, color: "gris" }
    ]
  },
  {
    apodo: "CatLady",
    email: "catlady999@yahoo.com",
    mascotas: [
      { nombre: "Tom", edad: 2, color: "gris y blanco" },
      { nombre: "Lucas", edad: 4, color: "negro" }
    ]
  },
  {
    apodo: "GatitoFeliz",
    email: "gatitofeliz22@hotmail.com",
    mascotas: [
      { nombre: "Cleo", edad: 1, color: "marrón" },
      { nombre: "Toby", edad: 6, color: "blanco" },
      { nombre: "Nina", edad: 2, color: "negro y blanco" }
    ]
  },
  {
    apodo: "ElGatoNegro",
    email: "elgatonegro@outlook.com",
    mascotas: [
      { nombre: "Oreo", edad: 3, color: "negro y blanco" },
      { nombre: "Milo", edad: 7, color: "naranja" }
    ]
  },
  {
    apodo: "GatitoTierno",
    email: "gatitotierno5555@gmail.com",
    mascotas: [
      { nombre: "Pelusa", edad: 2, color: "gris" },
      { nombre: "Kitty", edad: 4, color: "blanco y negro" },
      { nombre: "Loki", edad: 1, color: "marrón y blanco" }
    ]
  },
  {
    apodo: "CatQueen",
    email: "catqueen8888@hotmail.com",
    mascotas: [
      { nombre: "Fluffy", edad: 5, color: "blanco y gris" },
      { nombre: "Sasha", edad: 2, color: "marrón y blanco" }
    ]
  },
  {
    apodo: "Nepeta",
    email: "nepetaalegre7@yahoo.com",
    mascotas: [
      { nombre: "Punky", edad: 3, color: "naranja" },
      { nombre: "Zoe", edad: 1, color: "blanco" },
      { nombre: "Simón", edad: 4, color: "negro" }
    ]
  },
  {
    apodo: "GatoMimoso",
    email: "gatomimoso55@gmail.com",
    mascotas: [
      { nombre: "Leo", edad: 2, color: "blanco" },
      { nombre: "Coco", edad: 3, color: "negro y blanco" }
    ]
  },
]
```
