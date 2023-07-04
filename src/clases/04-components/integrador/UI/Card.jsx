function Card(props) {
  return (
    <div>
      {props.title ? <h1>{props.title}</h1> : undefined}
      <div>{props.children}</div>
      {props.footer ? <div>{props.footer}</div> : undefined}
    </div>
  );
}

export default Card;
