import React from 'react'

export const Contador = () => {
  const [cant, setCant] = React.useState(0)

  function incrementar() {
    setCant(cant + 1)
    console.log('cant', cant) // 0
  }

  function incrementarMultiple() {
    setCant(cant + 1) // q0
    setCant(cant + 1) // q1
    setCant(cant + 1) // q2
    setCant(cant + 1) // q3
    console.log('cant', cant) // 0
    //setCant no es sincrono,
    //pero tampoco es asincrono
    //(no le podemos hacer await para detener la ejecucion)
    //pensemoslo como una cola de tareas
    //cuando llamamos a setCant, react lo agrega a la cola de tareas
    //cuando termina de ejecutar la funcion, react ejecuta las tareas de la cola
    //si llamamos a setCant 4 veces, react va a agregar 4 tareas a la cola
    //como cant aun no cambio, todas las tareas van a tener el mismo valor

    /* simulacion de la cola de React (no confundir con la realidad XD)
      q0 -> cant = 0 + 1
      q1 -> cant = 0 + 1
      q2 -> cant = 0 + 1
      q3 -> cant = 0 + 1
    */

    //una vez que termina la cola de tareas,
    //react ejecuta el render una unica vez con el ultimo valor
  }

  function incrementarMultipleSincro() {
    setCant((preCant) => preCant + 1) // q0
    setCant((preCant) => preCant + 1) // q1
    setCant((preCant) => preCant + 1) // q2
    setCant((preCant) => preCant + 1) // q3
    console.log('cant', cant) // 0
    // setCant, en lugar de recibir un valor, puede recibir una funcion
    // esta funcion recibe como parametro el valor anterior de la variable
    // y retorna el nuevo valor de la variable
    // el setCant sigue sin ser sincronico
    // pero te permite acceder al valor anterior de la variable
    // y usarlo para calcular el nuevo valor de la variable consistentemente

    /* simulacion de setCant en React (no confundir con la realidad XD)
      function setCant(valueOrCallback) {
        if (typeof valueOrCallback === 'function') {
          const cant = valueOrCallback(cant)
        } else { // valueOrCallback es un valor
          cant = valueOrCallback
        }
      }
    */
    /* simulacion de la cola de React (no confundir con la realidad XD)
      q0 -> cant = cant + 1
      q1 -> cant = cant + 1
      q2 -> cant = cant + 1
      q3 -> cant = cant + 1
    */
  }

  return (
    <div className='flex items-center'>
      <button onClick={incrementar}>incrementar</button>
      <button onClick={incrementarMultiple}>incrementar Multiple</button>
      <button onClick={incrementarMultipleSincro}>incrementar Multiple pero bien</button>
      <span>Cant: {cant}</span>
    </div>
  )
}
