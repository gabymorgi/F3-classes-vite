import React from 'react'

const Color = (props) => {
  const [boolState, setBoolState] = React.useState(false)

  function toggleBoolState() {
    setBoolState(!boolState)
    console.log("toggle", boolState)
  }

  React.useEffect(
    () => {
      console.log("effect", boolState)

      return () => {
        console.log("cleanup", boolState)
      }
    },
  )

  console.log("color render", boolState)

  return (
    <div className='flex'>
      <div>
        {props.selectedColor}
      </div>
      <button onClick={toggleBoolState}>
        {boolState ? 'Si' : 'No'}
      </button>
    </div>
  )
}

export default Color
