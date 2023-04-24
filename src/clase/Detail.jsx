import { useEffect, useState } from "react"
import { useTest } from "./hooks/customHook"
import { useFetch } from "./hooks/useFetch";

function Detail() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts/1')

  console.log("detail", data, loading, error)

  return (
    <div>
      <h1>Detail</h1>
    </div>
  );
}

export default Detail;
