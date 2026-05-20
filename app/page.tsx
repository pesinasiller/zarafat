"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

async function getProducts() {
  return client.fetch('*[_type == "product"]');
}

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => {
      console.log("Products:", products);
      setProducts(products);
    });
  }, []);
  const productsElements = products.map((product) => (
    <div key={product._id}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
    </div>
  ));
  console.log("Products Elements:", productsElements);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {productsElements}
    </div>
  );
}
