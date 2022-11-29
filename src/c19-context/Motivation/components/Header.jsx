import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export const Header = (props) => {
  return (
    <header>
      <h1>Tienda Vapor (eon)</h1>
      <div className="flex">
        <span>{props.changuito.length} elementos en el chango</span>
        <Link to="/changuito">
          <Button type="primary">Compraarrr!!</Button>
        </Link>
      </div>
    </header>
  )
}
