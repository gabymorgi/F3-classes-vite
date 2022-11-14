import React from 'react'

const Color = (props) => {
  const [selected, setSelected] = React.useState(false)
  const [prevColor, setPrevColor] = React.useState()
  const [timer, setTimer] = React.useState(0)

  const toggle = () => {
    setSelected(!selected)
  }

  React.useEffect(() => {
    console.log('after every render')

    return () => {
      console.log('clean up')
    }
  })

  React.useEffect(() => {
    console.log('mount')
    const interval = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000);
    //login

    return () => {
      //logout
      clearInterval(interval)
      console.log('unmount')
    }
  }, [])

  React.useEffect(() => {
    console.log('use effect')

    return () => {
      setPrevColor(props.selectedColor)
      console.log('saneamiento', props.selectedColor)
    }
  }, [props.selectedColor])

  console.log('render', prevColor)

  return (
    <div className='flex'>
      <div>{prevColor || 'none'} -&gt; {props.selectedColor}</div>
      <div>{timer} segundos</div>
      <button onClick={toggle}>{selected ? 'seleccionado' : 'Seleccionar'}</button>
    </div>
  )
}

export default Color
