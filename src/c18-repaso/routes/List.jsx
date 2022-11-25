import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const List = () => {
  const [products, setProducts] = React.useState([]);
  //este hook nos devuelve una funcion que nos permite navegar
  const navigate = useNavigate();

  //useCallback es una forma de memoizar una funcion
  //para que no cambie su referencia en cada render
  const getData = useCallback(async () => {
    // fetch devuelve una promesa, asi que le hacemos await
    // json devuelve otra promesa, asi que le hacemos await tambien
    const data = await (await fetch("api/products")).json()
    setProducts(data.products)
  }, [])

  useEffect(() => {
    getData()
  }, [getData])

  function onClickDetail(id) {
    //navigate es lo mismo que Link
    //pero nos permite hacerlo desde el codigo
    //por si necesitamos hacer algo antes del redirect
    navigate(`/${id}/detail`)
  }

  return (<div>
    <h2>EL listado</h2>
    {products?.map((product) => (
      <div key={product.id} className="flex card">
        <div>{product.title}</div>
        <button onClick={() => onClickDetail(product.id) }>Detail</button>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    ))}
    <Link to="/create">
      <button>Create new perfume</button>
    </Link>
  </div>)
}