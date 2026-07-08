"use client";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { use, useEffect, useState } from "react";
import styles from "./page.module.scss";

function getProduct(id: string) {
  return client.fetch('*[_type == "product" && _id == $id][0]', { id });
}

export default function ProductDetailsPage({ params }) {
  const { id } = use(params);
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct(id).then((data) => setProduct(data));
  }, [id]);

  if (Object.keys(product).length === 0) {
    return (
      <div className={styles["product-page"]}>
        <div className={styles["product-page__loading"]}>
          <div
            className={styles["product-page__spinner"]}
            role="status"
            aria-label="Loading…"
          />
          <span>Loading product…</span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles["product-page"]}>
      <div className={styles["product-page__card"]}>
        {product?.image && (
          <div className={styles["product-page__image-wrapper"]}>
            <img
              src={urlFor(product.image).url()}
              alt={product.name}
              className={styles["product-page__image"]}
            />
          </div>
        )}

        <div className={styles["product-page__body"]}>
          <span className={styles["product-page__badge"]}>
            Traditional Craft
          </span>

          <h1 className={styles["product-page__title"]}>{product?.name}</h1>

          {product?.description && (
            <p className={styles["product-page__description"]}>
              {product.description}
            </p>
          )}

          <hr className={styles["product-page__divider"]} />

          <div className={styles["product-page__meta"]}>
            <div className={styles["product-page__meta-row"]}>
              <span className={styles["product-page__meta-label"]}>Price</span>
              <span className={styles["product-page__meta-price"]}>
                {product?.price ? `$${product.price}` : "—"}
              </span>
            </div>
            <div className={styles["product-page__meta-row"]}>
              <span className={styles["product-page__meta-label"]}>
                Product ID
              </span>
              <span className={styles["product-page__meta-value"]}>
                {product?._id}
              </span>
            </div>
          </div>

          <button className={styles["product-page__btn-primary"]} type="button">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
