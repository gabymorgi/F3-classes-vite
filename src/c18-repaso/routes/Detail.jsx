import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Detail = () => {
  const [product, setProduct] = React.useState(null);
  const params = useParams();
  //use params nos devuelve un objeto con los parametros
  //que le pasamos a la ruta con :parametro
  //en este caso, el id
  //nos va a devolver un objeto tipo {id: "1"}
  const navigate = useNavigate();

  function goBack() {
    //a navigate le podemos pasar un numero
    //para que se mueva por el arreglo de historial
    navigate(-1);
  }

  useEffect(() => {
    async function getPerfume() {
      //tuvimos que agregar la url base porque
      //miragejs se rompia por whatever reason
      //alguien dijo que puede que sea por el puerto
      //le creemos
      const data = await (
        await fetch(`http://127.0.0.1:5173/api/products/${params.id}`)
      ).json();
      setProduct(data.product);
    }

    if (params.id) { //por las dudas que params.id sea undefined
      getPerfume();
    }

    //el codigo de abajo fue experimental y no tiene utilidad
    const fn = (e) => {
      console.log("keydown", e);
    }

    window.addEventListener("keydown", fn)

    return () => {
      //la idea de la funcion de saneamiento es que
      //se ejecute cuando el componente se desmonte
      // o antes de que se ejecute el useEffect de nuevo
      //esto nos permite limpiar los eventos que agregamos en el useEffect
      // por ejemplo setTimeout, setInterval, addEventListener, etc
      //si no lo hacemos, tendremos un memory leak
      window.removeEventListener("keydown", fn)
    }
  }, [params.id]);

  return (
    <div>
      {product ? (
        <div className="flex-row card">
          <div>{product.title}</div>
          <div>{product.description}</div>
        </div>
      ) : (
        "product not found"
      )}
      <button onClick={goBack}>Go back</button>
    </div>
  );
};
