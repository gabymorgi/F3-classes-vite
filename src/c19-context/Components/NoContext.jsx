import React from "react";
import { useContext } from "react";
import { ChangoContext } from "../Contexts/ChangoContext";

export const NoContext = () => {
  const changoContext = useContext(ChangoContext)
  console.log("no context", changoContext)
  return <div>NoContext</div>;
}
