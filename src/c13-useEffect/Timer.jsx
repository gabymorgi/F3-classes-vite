import React from "react";
import { useEffect } from "react";

export function Timer() {
  const [time, setTime] = React.useState(0);

  useEffect(() => {
    console.log("effect")
    const interval = setInterval(() => {
      setTime((time) => time + 1);
      console.log("interval")
    }, 1000);

    return () => {
      console.log("cleaning up");
      clearInterval(interval)
    }
  }, [])

  return <div>{time} segundos</div>;
}
