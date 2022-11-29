import { Button, Table } from "antd";
import React from "react";
import { useMemo } from "react";

export const Changuito = (props) => {
  const dataSource = useMemo(() => {
    return props.changuito.map((game) => ({
      key: game.id,
      name: game.name,
      img: <img width="200px" src={game.imgUrl} />,
      delete: (
        <Button danger type="primary" onClick={() => props.onRemove(game)}>
          Delete
        </Button>
      )
    }));
  }, [props])
  return <div>
    <h1>Changuito</h1>
    <Table dataSource={dataSource}>
      <Table.Column title="Name" dataIndex="name" />
      <Table.Column title="Image" dataIndex="img" />
      <Table.Column title="Delete" dataIndex="delete" />
    </Table>
  </div>
}
