# Debugging Tools

## Debugger

> **Debugger** es una herramienta que nos permite correr un programa de a una linea a la vez, y ver los valores que estan guardadas en cada variable mientras el programa se ejecuta.

### Como usar el debugger

Para usar el debugger, tenemos que poner la palabra clave `debugger` en el codigo donde queremos que el programa se detenga. Por ejemplo:

```js
function sumar(a, b) {
  debugger;
  return a + b;
}
```

Cuando el programa llega a la palabra clave `debugger`, se detiene y nos permite ver los valores de las variables en ese momento. Tambien nos permite ejecutar codigo en la consola.

![Imagen Debugger](/public/debugger.png)

En mi experiencia personal, esta herramienta es muy util para funciones normales, no Componentes de React, porque a veces entramos en codigo de React que no podemos controlar, y el debugger se detiene en ese codigo, y no en el nuestro.

## Console log

> **Console log** es una herramienta que nos permite ver los valores de las variables en un momento especifico del programa.

### Como usar el console log

Para usar el console log, tenemos que poner la palabra clave `console.log()` en el codigo donde queremos ver el valor de una variable. Por ejemplo:

```js
function sumar(a, b) {
  console.log(a, b);
  return a + b;
}
```

sin embargo, si necesitamos mostrar muchos valores, es mejor usar el console log de esta manera:

```js
function sumar(a, b) {
  console.log({ a, b });
  return a + b;
}
```

esto es igual a:

```js
function sumar(a, b) {
  console.log({
    a: a,
    b: b
  });
  return a + b;
}
```

Recuerden que los console log son gratis, y no afectan el rendimiento de la aplicacion, pero si afectan la legibilidad del codigo, por eso es importante borrarlos cuando ya no los necesitamos.

## Errores en consola

> **Errores en consola** son mensajes que nos muestra el navegador cuando nuestro codigo tiene algun error.

### Como leer los errores en consola

Los errores en consola nos muestran el nombre del error, y la linea donde esta el error. Por ejemplo:

![Imagen Error](/public/error.png)

con estos mensajes podemos tratar de acotar el problema, y buscar la solucion.
Ojo, si el componente se usa en muchos lados, se nos va a llenar la consola de errores, y no vamos a poder ver los errores que nos interesan.
Para estos casos, es util comentar todo lo que no nos interesa, y si es necesario mockear datos para forzar el error en entornos mas controlados.

![Imagen Debugger](/public/button-component.png)

![Imagen Debugger](/public/button-console-mess.png)

![Imagen Debugger](/public/button-container-comments.png)

![Imagen Debugger](/public/button-console-clean.png)

Los pasos que yo sigo tipicamente son:

1. Leo el error, y veo si lo entiendo por simplemente ver el mensaje y la linea.

2. Hago console log para ver cual es el estado de las variables en ese momento.

3. Comento partes del componente para simplificar el problema.

4. Busco en internet el error, y veo si alguien mas lo tuvo. Hoy tenemos herramientas como ChatGPT, que nos permiten buscar exactamente nuestro error. Si bien muchas veces no lo soluciona, a veces da pistas interesantes.

5. Borrar cache, resetear el entorno

6. Llorar

(de aca para abajo son recomendaciones de Copilot)

7. Llamar a un amigo

8. Llamar a un amigo que sepa mas

9. Llamar a un amigo que sepa mas y que tenga mas paciencia

10. Llamar a un amigo que sepa mas y que tenga mas paciencia y que tenga mas tiempo

11. Llamar a un amigo que sepa mas y que tenga mas paciencia y que tenga mas tiempo y que tenga mas ganas

12. Llamar a un amigo que sepa mas y que tenga mas paciencia y que tenga mas tiempo y que tenga mas ganas y que tenga mas suerte
