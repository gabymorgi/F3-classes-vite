function Card(props) {
  return (
    <div className="practica-4-card">
      {props.title ? <h1>{props.title}</h1> : undefined}
      <div className="practica-4-card-body">{props.children}</div>
      {props.footer ? <div className="practica-4-card-footer">{props.footer}</div> : undefined}
    </div>
  );
}

export default Card;
