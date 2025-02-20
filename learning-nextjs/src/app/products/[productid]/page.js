"use client";
import React, { useEffect, useState } from "react";
import products from "../data";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
const Page = () => {
  const { productid } = useParams();
  const [product, setProduct] = useState(null);
  const [IDNotFound, setIDNotFound] = useState(false); 

  useEffect(() => {
    if (productid > 100) {
      notFound();
    }
    if (productid) {
      const filteredProduct = products.find(
        (item) => item.id === Number(productid)
      );

      if (filteredProduct) {
        setProduct(filteredProduct);
        setIDNotFound(false); 
      } else {
        // setProduct(null); 
        setIDNotFound(true);
      }
    }
  }, [productid]); 

  return (
    <div>
      {IDNotFound ? (
        <p>No product found with this ID: {productid}</p>
      ) : product ? (
        <div key={product.id} className="">
          <p>Id: {product.id}</p>
          <p>Name: {product.name}</p>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          <p>Stock: {product.stock}</p>
          <p>Rating: {product.rating}</p>
          <p>Description: {product.description}</p>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default Page;
