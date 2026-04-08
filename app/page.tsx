'use client';

import { useEffect } from "react";
import { client } from "@/sanity/lib/client";

async function getPosts() {
  return client.fetch('*[_type == "post"]');
}

export default function Home() {

  useEffect(() => {
    getPosts().then((posts) => {
      console.log("Posts:", posts);
    });
  }, []);


  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      TEst
    </div>
  );
}
