import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log("effect")
    const interval = setInterval(() => {
      setTime((time) => time + 1);
      console.log("interval")
    }, 5000);

    return () => {
      //this function will be executed when the component is unmounted
      console.log("cleaning up");
      clearInterval(interval)
    }
    //this effect will be executed only once after it's first render
  }, [])

  useEffect(() => {
    console.log("time effect")
    //this effect only will be executed every time "time" changes
  }, [time])

  useEffect(() => {
    console.log("always effect")
    //this effect will be executed every time the component is rendered
    //(when the state, props or parent component changes)
  })

  return <div>{time} segundos</div>;
}

export default Timer;
