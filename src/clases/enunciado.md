# Practica Integradora

## Practica Clase 1

1. Crear funcion que convierta Date en string format "dd/mm/yyyy"

2. Crear funcion que convierta un objeto `{[key]: value}` en un array `[{ name: [key], value: value}]`

## Practica Clase 2

1. Crear una carpeta con todos los datos mockeados necesaros:

[user](/src/fakeApi/ghUser.json)
[repos](/src/fakeApi/ghRepos.json)
[repoList](/src/fakeApi/ghRepoDetail.json)
[repoLanguages](/src/fakeApi/ghLanguages.json)

2. Cree una carpeta utils con las funciones creadas en la clase anterior

## Practica Clase 3

1. Crear un componente Navbar que renderice un header que internamente tendra 2 bloques

por un lado el [logo](/public/hitbug-logo.png) y nombre de la aplicacion

por otro lado 3 span con los siguientes textos: `User Info`, `Repos`, `Log Out`; y un bloque con el nombre y avatar del [usuario](/src/fakeApi/ghUser.json)

No es necesario aplicar estilos aun


2. Crear componente Login que muestre el logo y el nombre de la aplicacion (el formulario no)

3. Crear un componente para la Home Page, que muestre Welcome userName (usar la data mockeada)

4. Crear componente UserInfo que muestre la imagen y nombre del usuario, un link externo al github del usuario, cant Seguidores, cant siguiendo, cant repos, bio

No es necesario aplicar estilos aun

## Practica Clase 4

1. Crear componente Card, que reciba props title, children, footer. title y footer son opcionales!!

2. Crear un componente info que reciba props label y value.

3. Crear componente Tag que muestre el children

4. Crear componente RepoDetail para mostrar la info de ghRepoDetail.
Usa una card solo con body. En la misma se van a mostrar varios componentes Info con la siguiente informacion
name
created, update y pushed at (usar utility function creada previamente)
description
watchers
forks
stars
link
languages: usar utility function creada previamente para convertir repoLanguages en array, calcular el porcentaje en base a las lineas totales y **mostrar solo el primer elemento**

5. Modificar UserInfo para que use el componente Card, prop title con la imagen y el userName, y el footer con el link al github del usuario. En el children usaremos varios componentes info para mostrar la informacion restante

## Practica Clase 5

1. Agregarle estilos a Tag: border, background, border-radius, y padding

2. Agregarle estilos a Info: Y muestre ambos valores verticalmente separados por algunos pixeles, y el label bold

3. Agregarle estilos a la card: border, border radius y un color de fondo
El title tiene border bottom y padding
el body tiene padding, y dentro va el children
El footer tiene padding y border top

4. Agregarle estilos al Header: display flex, justify-content space-between, padding, border-bottom

## Practica Clase 6

1. Crear componente repolist que muestre una grilla de card con la info de cada repo
- el title de cada card tendra el nombre del repo
- si el proyecto es un fork, se mostrara un Tag a la derecha
- el footer tendra un link externo a github
- en el body habra un conjunto de componentes info con la siguiente informacion. Descripcion, lenguaje principal, estrellas, y seguidores


Clase 7 state i
usar un estado en el header para mostrar la tab active

clase 8 state ii
mostrar una lista de lenguajes favoritos. Cuando se selecciona uno, se debe mostrar un indicador en todas las cards de repos que tengan ese lenguaje como principal
la lista de lenguajes la sacaremos de ghLanguages.json


Clase 9
Crear un formulario que permita ingresar un string, que sera el nombre de usuario. Al hacer click en login, imprimir por consola el valor ingresado

clase 10
crear formulario en el componente repolist, que permita ingresar un metodo de ordenamiento y una direccion
sort: es un select con los siguientes valores: created, updated, pushed, full_name
direction: es un select con los siguientes valores: asc, desc
cuando se apreta en el boton order se muestra por consola los valores ingresados

clase 11
meter busqueda de datos en useEffect
Crear una funcion que haga un get a la api de github. si devuelve info(el user existe), imprimir esa info por consola. Si no, mostrar un mensaje de error
Crear una funcion que reciba nombre de usuario y nombre de repo, y devuelva el detalle de ese repo junto con los lenguajes utilizados

clase fetch
Crear una funcion que haga un get a la api de github. si devuelve info(el user existe), imprimir esa info por consola. Si no, mostrar un mensaje de error
doc: https://docs.github.com/es/rest/users/users#get-a-user
ej: https://api.github.com/users/gabymorgi

Crear una funcion que reciba nombre de usuario y nombre de repo, y devuelva el detalle de ese repo junto con los lenguajes utilizados
doc: https://docs.github.com/es/rest/repos/repos#get-a-repository
ej: https://api.github.com/repos/gabymorgi/F3-classes-vite

Crear una funcion que reciba *opcionalmente* sort y direction, y devuelva una lista de repos 
https://docs.github.com/es/rest/repos/repos#list-repositories-for-a-user
https://api.github.com/users/{username}/repos
https://api.github.com/users/{username}/repos?sort=created&direction=asc
o, en el body de la request
const response = await Axios.get(`${baseUrl}/users/${mockedUser}/repos`, {
   params: {
      sort: 'full_name',
      direction: 'desc',
   }
})

clase memo
guardar en memo el calculo de porcentage de repos

Clase
React Router

HB-23
Crear estructura de rutas
/login
/
--info
--list

HB-17
Modificar la funcion de login, para que redirija al home si el usuario ingresado es correcto
crear rutas protegidas para que si no hay usuario, redirija al login

HB-24
refactorizar los links internos para que usen router

HB-25
refactorizar estructura de rutas para que el header este presente en todas las secciones excepto el login (sin replicar el componente en cada seccion)

clase react router 2

agregar ruta
--repo/:repoId
utilizar useParams para obtener el id en repo detail, y usarlo para obtener el repo

HB-27
agregar go back button en el componente repo detail

HB-28
utilizar useSearchParams para almacenar los datos del formulario de repolist
usarlos para buscar los repos con la api

Clase testing
probar componente lenguajes favs
- se tiene que renderizar
- la cantidad de items tiene que ser igual a la de los lenguajes enviados
- si se el envia una fav, tiene que estar primary
- on click tiene que llamar a la funcion enviada

Clase context
HB-18
Crear un Contexto que almacene la informacion del usuario, y que exponga dicha informacion, y una funcion de login

HB-19
Modificar la funcion de login, para que almacene la informacion del usuario ingresado en un contexto

HB-26
refactorizar boton logout para que borre los datos del user al hacer click y redireccione a /login

clase local storage
guardar lenguaje favorito en el storage

clase reducer
usar un reducer en el context con las acciones: login, logout

clase custom hook
useFetch para traer los datos de la api

clase useRef
agregar un boton scroll to top que este sticky

calse antd
migrar wii


