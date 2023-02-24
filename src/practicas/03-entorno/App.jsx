import isOdd from 'is-odd';

function Practica03() {
  return (
    <div>
      <h1>Es 2 par?</h1>
      <p>{isOdd(2) ? 'Es impar' : 'Es par'}</p>
      <h1>Es 3 par?</h1>
      <p>{isOdd(3) ? 'Es impar' : 'Es par'}</p>
    </div>
  );
}

export default Practica03;
