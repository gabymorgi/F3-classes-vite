interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > { // hago hover en un <button> y me dice que tipo de props tiene
  loading?: boolean
}

const Button = (props: ButtonProps) => {
  const { loading, ...restProps } = props
  return (
    <button {...restProps} disabled={loading || props.disabled}>
      {loading ? <span>loading...</span> : props.children}
    </button>
  )
}

export default Button
