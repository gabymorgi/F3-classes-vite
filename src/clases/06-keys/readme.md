# Clase Keys

<details>
<summary style="font-size:28px">Teoria</summary>

---

Lee la siguiente documentacion:

- [Renderizando Listas](https://react.dev/learn/rendering-lists#)

- Lee [esta diapositiva](https://docs.google.com/presentation/d/1CjDsfNcOu15MUIh1BiIe5bZt6mZGo7ynH8QvhcYTGBM/edit?usp=sharing) para tener una mejor idea.

Comienza a leer el archivo `App.jsx`, intenta entender el flujo de renderizado, el funcionamiento, y como se relacionan los componentes entre si.

- Observa como usamos `.map` para renderizar una lista de elementos.

- Analiza que pasa cuando no le pasamos una `key` a un elemento de una lista.

- Recuerda las dos reglas de las `keys`:

  - Deben ser unicas entre los elementos de la lista.

  - Deben ser estables en el tiempo.

    - Esto no podremos entenderlo hasta que veamos el ciclo de vida de los componentes. Pero piensa en que pasa si cambiamos el orden de los elementos de la lista, o si agregamos o quitamos uno.

---

Si quieres, puedes ver el ejercicio con el que trabajaremos durante la clase [aqui](/src/clases/06-keys/teoria/App.jsx)
</details>
<details>
<summary style="font-size:28px">Practica</summary>

---

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

---

Puedes ver la resolucion [aqui](/src/clases/06-keys/practica/App.jsx)
</details>
<details>
<summary style="font-size:28px">Integrador</summary>

1. Crear componente repolist que muestre una grilla de card con la info de cada repo
- el title de cada card tendra el nombre del repo
- si el proyecto es un fork, se mostrara un Tag a la derecha
- el footer tendra un link externo a github
- en el body habra un conjunto de componentes info con la siguiente informacion. Descripcion, lenguaje principal, estrellas, y seguidores

</details>