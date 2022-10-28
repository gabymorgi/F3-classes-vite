import React from 'react'

export function Button({ ...props })  {
  //puedo ignorar los props que no me interesan
  const { id, ...restProps } = props

  //puedo simular la herencia, utilizando el spread operator,
  //y luego sobreescribiendo los valores que necesito para mi componente particular
  return <button { ...restProps } disabled={props.loading ? true : props.disabled}>
    {props.loading ? 'Cargando...' : props.children}	
  </button>
}
