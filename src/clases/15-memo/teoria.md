# Teoria clase 15!

- Comienza a leer el archivo `App.jsx`, intenta entender el flujo de renderizado, el funcionamiento, y como se relacionan los componentes entre si.

- Aprende la sintaxis de `useMemo`

  - Recuerda que el primer parametro es una funcion, que se ejecutara cuando el componente se monte, y cada vez que cambie el valor de alguna de las dependencias. Y que el valor de retorno de la funcion, sera el valor que se guarde en la variable.

  - El segundo parametro es un array de dependencias, que le indica a React que debe ejecutar la funcion del primer parametro, solo cuando cambie el valor de alguna de las dependencias.

- Observa como evitamos calculos innecesarios con `useMemo` cuando cambian props que **no** son dependencias, o cuando se renderiza el componente debido a un cambio de estado en el componente padre.

Luego puedes ir a resolver la practica.

> recuerda consultar la [documentacion](/doc/externalLinks.md#clase-15-usememo) si quieres saber mas sobre alguna instruccion
