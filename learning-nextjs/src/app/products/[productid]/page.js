"use client";
import React, { useEffect, useState } from "react";
import products from "../data";
import { useParams, useRouter, notFound } from "next/navigation";

const Page = () => {
  const { productid } = useParams();
  const router = useRouter();
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
        setIDNotFound(true);
      }
    }
  }, [productid]);

  const handleOrder = () => {
    alert("✅ Your order has been placed successfully!");
        router.push("/") // to redirect to a specific path given
        router.replace("/") // without history cannot back to previous page
        router.back() // back to previous url path
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {IDNotFound ? (
        <p className="text-red-600 text-xl font-bold">
          ❌ No product found with this ID: {productid}
        </p>
      ) : product ? (
        <div className="grid md:grid-cols-1 gap-8 bg-white p-6 shadow-lg rounded-lg">
          {/* Product Image Section */}
          <div className="flex justify-center">

          </div>

          {/* Product Details Section */}
          <div>
            <h1 className="text-3xl font-semibold text-gray-800 mb-2">
              {product.name}
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              Category: <span className="font-semibold">{product.category}</span>
            </p>
            <p className="text-2xl font-bold text-green-600 mb-4">
              ${product.price}
            </p>
            <p className="text-gray-700">{product.description}</p>

            {/* Stock & Rating */}
            <div className="flex items-center mt-4">
              <span
                className={`px-3 py-1 text-sm font-semibold rounded-md ${
                  product.stock > 0
                    ? "bg-green-200 text-green-800"
                    : "bg-red-200 text-red-800"
                }`}
              >
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
              </span>
              <span className="ml-4 text-yellow-500 font-bold">
                ⭐ {product.rating} / 5
              </span>
            </div>

            {/* Order Button */}
            <button
              onClick={handleOrder}
              className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition duration-300"
            >
              🛒 Buy Now
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-600 text-lg">Loading product details...</p>
      )}
    </div>
  );
};

export default Page;
