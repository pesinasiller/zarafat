"use client";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

function getProduct(id: string) {
  return client.fetch('*[_type == "product" && _id == $id][0]', {
    id: "2b24d642-c547-48a8-884a-f4a3de6eee63",
  });
}

export default async function ProductDetailsPage({ params }) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct(params.id).then((product) => {
      console.log("Product:", product);
      setProduct(product);
    });
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="w-full max-w-3xl rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl shadow-zinc-900/5 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white">
        <h1 className="mb-4 text-4xl font-semibold">{product?.name}</h1>
        <p className="mb-6 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
          {product?.description}
        </p>
        <div className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
          <p>
            <span className="font-semibold">Price:</span> {product?.price}
          </p>
          <p>
            <span className="font-semibold">Product ID:</span> {product?._id}
          </p>
        </div>
      </div>
    </div>
  );
}
