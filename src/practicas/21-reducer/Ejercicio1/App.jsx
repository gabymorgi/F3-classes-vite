import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.step };
    case "DECREMENT":
      return { count: state.count - action.step };
    default:
      return state;
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT", step: parseInt(step) });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT", step: parseInt(step) });
  };

  const [step, setStep] = React.useState("1");

  const handleStepChange = (event) => {
    setStep(event.target.value);
  };

  return (
    <div>
      <h1>Contador: {state.count}</h1>
      <label>
        Paso:
        <input type="number" value={step} onChange={handleStepChange} />
      </label>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default Counter;