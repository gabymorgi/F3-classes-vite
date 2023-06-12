# Practica clase 6!

### Practica de key y map

Muestra las siguiente lista de elementos utilizando el metodo map. Intenta utilizar la key que consideras mas apropiada en cada caso.

1. Muestra la lista de productos con su nombre, precio y descripcion

    - usa la siguiente [data](/src/fakeApi/products.json)

2. Muestra la lista de links que muestren el nombre del usuario y redirijan a `https://twitter.com/${account}`

    - usa la siguiente [data](/src/fakeApi/accounts.json)

3. Muestra la lista de usuarios con su apodo, y la lista de sus mascotas con el formato `${nombre} (${edad}): ${color}`

    - usa la siguiente [data](/src/fakeApi/users.json)

4. Crea un componente ProductCard, que se encargue de mostrar un producto de la misma forma que en el paso 1, pero con un boton adicional para agregar el producto al chango.

    - Agregale una prop a ProductCard `onAddToCart` que reciba una funcion que se llamara cuando se clicke en el boton de agregar.

    - Utiliza este nuevo componente dentro del map de productos en tu App.

    - Crea una funcion en App que reciba un id como parametro y muestre **por consola** que se agrego un producto al carrito (sin funcionalidad), e indique su id.

    - Enviale esta funcion como prop a ProductCard
