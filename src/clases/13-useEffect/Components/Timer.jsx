import { useEffect, useState } from "react";

const Timer = (props) => {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    console.log("effect")
    const interval = setInterval(() => {
      // necesitamos usar una funcion para actualizar el estado
      // porque el valor de tick depende del valor anterior
      // y setInterval se crea una sola vez
      // con el valor del estado en ese momento (snapshot)
      setTick((tick) => tick + 1);
      console.log("interval")
    }, props.delay);

    return () => {
      // esto se ejecuta cuando cambia el delay o cuando se desmonta el componente
      // antes de ejecutar el siguiente efecto
      console.log("cleaning up");
      // que pasa si no limpiamos el interval?
      clearInterval(interval)
    }
    // agregamos en el arreglo de dependencias el delay
  }, [props.delay]);

  return <div>{tick} Ticks</div>;
}

export default Timer;
