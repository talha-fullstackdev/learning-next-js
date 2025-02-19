// import React from 'react'
// const page = ({params}) => {
//     const productID = params.productid
    
//   return (
//     <div>This is page of product id {productID}</div>
//   )
// }

// export default page
////////////getting params value by useParams hooks also we need to make this component client because we can only use hooks inside clients components
"use client";
import React, { useEffect, useState } from "react";
import products from "../data";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
const Page = () => {
  const { productid } = useParams(); 
  const [product, setProduct] = useState(null); // Store a single product
  const [IDNotFound, setIDNotFound] = useState(false); // Track if product is not found

  useEffect(() => {
    if(productid>100){
      notFound()
    }
    if (productid) {
      // Find product based on the dynamic route ID
      const filteredProduct = products.find(
        (item) => item.id === Number(productid) // Convert productid to number for comparison
      );

      if (filteredProduct) {
        setProduct(filteredProduct);
        setIDNotFound(false); // Reset the not found state
      } else {
        setProduct(null);
        setIDNotFound(true); // Set not found state to true
      }
    }
  }, [productid]); // Dependency array includes productid

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
