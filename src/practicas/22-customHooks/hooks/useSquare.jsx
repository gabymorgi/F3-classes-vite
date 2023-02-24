import { useState } from 'react'

export const useSquare = (initialSquare) => {
  const [square, setSquare] = useState(
    initialSquare || { posX: 0, posY: 0, width: 100, height: 100 }
  )
  const perimeter = square.width * 2 + square.height * 2
  const area = square.width * square.height
  const isSquare = square.width === square.height
  return [square, setSquare, { perimeter, area, isSquare }]
}
