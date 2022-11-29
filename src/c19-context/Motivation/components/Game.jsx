import { Button, Card } from 'antd'
import React from 'react'

export const Game = (props) => {
  function handleAdd() {
    props.onAdd(props.game)
  }
  return (
    <Card
      title={props.game.name}
      extra={
        <Button type='primary' onClick={handleAdd}>
          Add to cart
        </Button>
      }
    >
      <span>{props.game.description}</span>
      <img width='100%' src={props.game.imgUrl} alt={props.game.name} />
    </Card>
  )
}
