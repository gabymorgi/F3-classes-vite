import { useState } from 'react';

const ChartItem = (props) => {
  const [isTrue, setIsTrue] = useState(false)
  return (
    <div className="flex justify-between">
      <span>{props.name}</span>
      {/**estado solo para mostrar que pasa cuando ponemos mal las keys */}
      <button onClick={() => setIsTrue(!isTrue)}>
        {isTrue ? 'Yes' : 'No'}
      </button>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  );
};

export default ChartItem;
