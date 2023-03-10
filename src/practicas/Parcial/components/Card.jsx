function Card(props) {
  console.log(props.data)
  if (!props.data) return null
  return (
    <div>
      <p>{props.data.name}</p>
      <p>{props.data.pet}</p>
    </div>
  )
}

export default Card
