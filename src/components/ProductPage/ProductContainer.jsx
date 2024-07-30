import React from "react";
import { useSelector } from "react-redux";
import ProductCart from "./ProductCart";

export default function ProductContainer() {
  const products = useSelector((state) => state.product.products);

  return (
    <div className="productContainer" id="lws-productContainer">
      {products?.length ? (
        products?.map((product) => {
          return <ProductCart key={product.id} product={product} />;
        })
      ) : (
        <h1>There is no product</h1>
      )}
    </div>
  );
}
