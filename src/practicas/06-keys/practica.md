# Practica clase 6!

### Practica de key y map

muestra las siguiente lista de elementos utilizando el metodo map
intenta utilizar en cada caso, la key que consideras mas apropiada en cada caso

1. Muestra la lista de productos con su nombre, precio y descripcion

usa la siguiente [data](https://github.com/gabymorgi/F3-classes-vite/blob/main/src/fakeApi/products.json)

2. Muestra la lista de links que muestren el nombre del usuario y redirijan a `https://twitter.com/${account}`

usa la siguiente [data](https://github.com/gabymorgi/F3-classes-vite/blob/main/src/fakeApi/accounts.json)

3. Muestra la lista de usuarios con su apodo, y la lista de sus mascotas con el formato `${nombre} (${edad}): ${color}`

usa la siguiente [data](https://github.com/gabymorgi/F3-classes-vite/blob/main/src/fakeApi/users.json)

4. Crea un componente ProductCard, que se encargue de mostrar un producto de la misma forma que en el paso 1, pero con un boton adicional para agregar el producto al chango. Y utilizala dentro del map.
Agregale una prop `onAddToCart` que reciba una funcion que muestre **por consola** que se agrego al carrito (sin funcionalidad), e indique su id.
