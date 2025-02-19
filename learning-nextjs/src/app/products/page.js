import React from "react";
import products from "./data";
const ProductsPage = () => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="">
          <p>Id: {product.id}</p>
          <p>Name: {product.name}</p>
          <p>Price: {product.price}</p>
          <p>Category :{product.category}</p>
          <p>Stock :{product.stock}</p>
          <p>Rating: {product.rating}</p>
          <p>Description: {product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
