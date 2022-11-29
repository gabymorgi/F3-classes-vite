import { Col, Row } from "antd";
import React from "react";
import { Game } from "../components/Game";
import games from "../../../fakeApi/data.json";

export const List = (props) => {
  return <Row gutter={[16, 16]}>
    {games.map((game) => (
      <Col key={game.id} span={8}>
        <Game game={game} onAdd={props.onAdd} />
      </Col>
    ))}
  </Row>
}
