import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home";
import { List } from "./routes/List";
import { Detail } from "./routes/Detail";
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    product: Model,
  },
  seeds(server) {
    server.create("product", {
      id: 1,
      title: "Brown Perfume",
      description: "Royal_Mirage Sport Brown Perfu...",
      price: 40,
      stock: 52,
      category: "fragrances",
      image: "https://dummyjson.com/image/i/products/12/thumbnail.jpg",
    });
    server.create("product", {
      id: 10,
      title: "HP Pavilion 15-DK1056WM",
      description: "HP Pavilion 15-DK1056WM Gaming...",
      price: 1099,
      stock: 89,
      brand: "HP Pavilion",
      category: "laptops",
      image: "https://dummyjson.com/image/i/products/10/thumbnail.jpeg",
    });
  },

  routes() {
    this.namespace = "api/products";

    this.get("/", (schema) => {
      return schema.products.all();
    });

    this.get("/:id", (schema, request) => {
      let id = request.params.id;
      return schema.products.find(id);
    });

    this.put("/:id", (schema, request) => {
      let newAttrs = JSON.parse(request.requestBody);
      let id = request.params.id;
      let product = schema.products.find(id);
      return product.update(newAttrs);
    });

    this.post("/", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      return schema.products.create(attrs);
    });

    this.delete("/:id", (schema, request) => {
      let id = request.params.id;
      return schema.products.find(id).destroy();
    });
  },
});

function App() {
  return (<Routes>
    <Route path="/" element={<Home />}>
      {/** index means the same path as mother route,
       * but only if exact match */}
      <Route index element={<List />} />
      <Route path="create" element={<div>Create</div>} />
      <Route path=":id/detail" element={<Detail />} />
      {/** el ":" es una wild card, pero con nombre
       * asi quem, por ejemplo en /prueba/detail
       * recibiremos un param llamado id con el valor "prueba"
       */}
      <Route path="*" element={<div>Not found</div>} />
    </Route>
  </Routes>)
}

export default App;
