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


Clase 7
Conociendo los hooks en React
Hooks


Clase 8
Conociendo los hooks en React
Eventos y Formularios
HB-15
Crear un formulario que permita ingresar un string, que sera el nombre de usuario. Al hacer click en login, imprimir por consola el valor ingresado

HB-16
Crear una funcion que haga un get a la api de github. si devuelve info(el user existe), imprimir esa info por consola. Si no, mostrar un mensaje de error
doc: https://docs.github.com/es/rest/users/users#get-a-user
ej: https://api.github.com/users/gabymorgi

HB-21
crear formulario en el componente repolist, que permita ingresar un metodo de ordenamiento y una direccion
sort: es un select con los siguientes valores: created, updated, pushed, full_name
direction: es un select con los siguientes valores: asc, desc
cuando se apreta en el boton order se muestra por consola los valores ingresados

Clase 9
Conociendo los hooks en React
Revision y practica


Clase 10
Conociendo los hooks en React
Repaso general


Clase 11
Conociendo los hooks en React
Primera evaluacion


Clase 12
Conociendo los hooks en React
Puesta en comun


Clase 13
Ciclo de vida de los componentes
Ciclo de vida


Clase 14
Ciclo de vida de los componentes
Peticiones asincronicas en React
HB-13
Crear una funcion que reciba nombre de usuario y nombre de repo, y devuelva el detalle de ese repo junto con los lenguajes utilizados
doc: https://docs.github.com/es/rest/repos/repos#get-a-repository
ej: https://api.github.com/repos/gabymorgi/F3-classes-vite

HB-22
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


Clase 15
Ciclo de vida de los componentes
Revision y practica


Clase 16
Navegacion y testing en React
React Router
HB-17
Modificar la funcion de login, para que redirija al home si el usuario ingresado es correcto

HB-23
Crear estructura de rutas
/login
/
--info
--list
--repo/:repoId

HB-24
refactorizar los links internos para que usen router

HB-25
refactorizar estructura de rutas para que el header este presente en todas las secciones excepto el login (sin replicar el componente en cada seccion)

HB-27
agregar go back button en el componente repo detail

HB-28
utilizar useSearchParams para almacenar los datos del formulario de repolist
usarlos para buscar los repos con la api

utilizar useParams para obtener el id en repo detail, y usarlo para obtener el repo

Clase 17
Navegacion y testing en React
Intro a testing en React


Clase 18
Navegacion y testing en React
Revision y practica


Clase 19
Manejo de estado global
Estado global


Clase 20
Manejo de estado global
Estado global con Storage
HB-18
Crear un Contexto que almacene la informacion del usuario, y que exponga dicha informacion, y una funcion de login

HB-19
Modificar la funcion de login, para que almacene la informacion del usuario ingresado en un contexto

HB-20
Crear una ruta protegida, que redirija al home si el usuario no esta logueado

HB-26
refactorizar boton logout para que borre los datos del user al hacer click y redireccione a /login

HB-30
borrarmocked data. Solucionar errores

Clase 21
Manejo de estado global
Revision y practica


Clase 22
Manejo de estado global
Evaluacion final


Clase 23
Manejo de estado global
Custom hooks


Clase 24
Manejo de estado global
Evaluacion final - entrega


Clase 25
Herramientas
Mas utilidades en React


Clase 26
Herramientas
La importancia del testing


Clase 27
Herramientas
Cierre de la materia



