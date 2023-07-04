import { Select } from "antd";
import { useState } from "react";
import Ejercicio1 from "./Ejercicio1/App";
import Ejercicio2 from "./Ejercicio2/App";

function App() {
  const [excerciseNumber, setExcerciseNumber] = useState("1");
  return (
    <div className="App">
      <Select defaultValue="1" onChange={setExcerciseNumber}>
        <Select.Option value="1">Ejercicio 1</Select.Option>
        <Select.Option value="2">Ejercicio 2</Select.Option>
      </Select>
      <hr />
      {excerciseNumber === "1" && <Ejercicio1 />}
      {excerciseNumber === "2" && <Ejercicio2 />}
    </div>
  );
}

export default App;
