const Button = (props) => {
  //uso destructuring aislar loading del resto de props
  //restProps es un objeto con todas las props menos loading
  const { loading, ...restProps } = props
  return (
    <button {...restProps} disabled={loading || props.disabled}>
      {/* muestro condicionalmente un contenido u otro */}
      {loading ? <span>loading...</span> : props.children}
    </button>
  )
}

export default Button
