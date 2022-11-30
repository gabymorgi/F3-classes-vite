import React from "react";

const actionType = {
  ADD_START: "ADD_START",
  ADD_END: "ADD_END",
  REMOVE_START: "REMOVE_START",
  REMOVE_END: "REMOVE_END",
  RESET: "RESET",
};

/**
 * @param state array
 * @param action object with type and value properties
 * @returns the new state
 */
const reducer = (state, action) => {
  switch (action.type) {
    case actionType.ADD_START:
      return [action.value, ...state]
    case actionType.ADD_END:
      return [...state, action.value]
    case actionType.REMOVE_START:
      return state.slice(1)
    case actionType.REMOVE_END:
      return state.slice(0, -1)
    case actionType.RESET:
      return []
    default:
      throw new Error("Invalid action type")
  }
}

export const TheBag = () => {
  const [value, setValue] = React.useState("");
  const [bag, dispatchBag] = React.useReducer(reducer, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const addAtStart = () => {
    dispatchBag({ type: actionType.ADD_START, value });
    setValue("");
  };

  const addAtEnd = () => {
    dispatchBag({ type: actionType.ADD_END, value });
    setValue("");
  };

  const removeAtStart = () => {
    dispatchBag({ type: actionType.REMOVE_START, value });
  };

  const removeAtEnd = () => {
    dispatchBag({ type: actionType.REMOVE_END, value });
  };

  const resetBag = () => {
    dispatchBag({ type: actionType.RESET, value });
  };

  return (
    <div>
      <input
        type="string"
        value={value}
        onChange={handleChange}
      />
      <button onClick={addAtStart}>Agregar al Inicio</button>
      <button onClick={addAtEnd}>Agregar al Final</button>
      <button onClick={removeAtStart}>Eliminar del Inicio</button>
      <button onClick={removeAtEnd}>Eliminar del Final</button>
      <button onClick={resetBag}>Reset!!!</button>
      {bag.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};
