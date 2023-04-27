const Button = (props) => {
  //uso destructuring para sacar loading de props
  const { loading, ...restProps } = props
  return (
    <button {...restProps} disabled={loading || props.disabled}>
      {/* muestro condicionalmente un contenido u otro */}
      {loading ? <span>loading...</span> : props.children}
    </button>
  )
}

export default Button
