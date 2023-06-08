import { useEffect, useState } from "react";

const Timer = (props) => {
  const [time, setTime] = useState(0);
  
  useEffect(
    () => {
      console.log("useEffect", props)
      const interval = setInterval(() => {
        console.log("interval")
        setTime((prevValue) => prevValue + 1)
      }, 1000)

      return () => {
        // las cosas que necesito para limpiar la basura que genere en el useEffect anterior
        clearInterval(interval)
      }
    },
    []
  )

  function handleChangeTime() {
    setTime(time + 1)
  }
    
  console.log("render timer", time)

  return <div>
    <button onClick={handleChangeTime}>Increment Time</button>
    {time} segundos
  </div>;
}

export default Timer;
