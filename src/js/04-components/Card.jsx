const Card = (props) => {
  const { title, children } = props;
  return (
    <div className="class-4-card">
      <h1>{title}</h1>
      <div className="class-4-card-body">{children}</div>
    </div>
  );
};

export default Card;
