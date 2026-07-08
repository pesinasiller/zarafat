"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import styles from "./page.module.scss";
import ProductCard from "./components/ProductCard/ProductCard";

async function getProducts() {
  return client.fetch('*[_type == "product"]');
}

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  if (products.length === 0) {
    return (
      <div className={styles["catalog__loading"]}>
        <div className={styles["catalog__spinner"]} role="status" aria-label="Loading…" />
        <span>Loading products…</span>
      </div>
    );
  }

  return (
    <>
      <nav className={styles["catalog__navbar"]}>
        <span className={styles["catalog__navbar-brand"]}>زرافت · Zarafat</span>
        <span className={styles["catalog__navbar-tagline"]}>Traditional Afghan Crafts</span>
      </nav>

      <section className={styles["catalog__hero"]}>
        <h1 className={styles["catalog__hero-title"]}>
          Handmade with <span>Afghan heritage</span>
        </h1>
        <p className={styles["catalog__hero-subtitle"]}>
          Discover authentic traditional products crafted by local artisans across Afghanistan.
        </p>
      </section>

      <section className={styles["catalog__grid-section"]}>
        <p className={styles["catalog__section-label"]}>All products</p>
        <div className={styles["catalog__product-grid"]}>
          {products.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </section>
    </>
  );
}
