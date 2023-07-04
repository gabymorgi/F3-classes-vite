const Tag = (props) => {
  console.log(props);
  const typeClass = props.type ? `class-4-${props.type}` : "";
  const sizeClass = props.size ? `class-4-${props.size}` : "";
  return (
    <div className={`class-4-tag ${typeClass} ${sizeClass}`}>
      {props.children}
    </div>
  )
};

export default Tag;
