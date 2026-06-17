"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import CircularProgress from "@mui/material/CircularProgress";

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
    <Link href={`/product/${product._id}`} key={product._id}>
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
        {product?.image && (
          <img
            src={urlFor(product.image).url()}
            alt={product.name}
            className="w-full rounded-lg"
          />
        )}
      </div>
    </Link>
  ));

  if (products.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <p className="text-lg text-zinc-700 dark:text-zinc-300">
          <CircularProgress aria-label="Loading…" />
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {productsElements}
    </div>
  );
}
