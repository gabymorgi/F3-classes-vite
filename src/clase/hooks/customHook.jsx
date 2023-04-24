import { useState } from "react";

export function useTest(initialValue) {
  const [number, setNumber] = useState(initialValue);

  return {
    value: number,
    doubleValue: number * 2,
    changeNumber: setNumber,
  };
}