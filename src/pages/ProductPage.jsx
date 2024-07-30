import React from "react";
import ProductContainer from "../components/ProductPage/ProductContainer";
import ProductForm from "../components/ProductPage/ProductForm";

export default function ProductPage() {
  return (
    <div className="productWrapper">
      {/* <!-- products container --> */}
      <ProductContainer />
      {/* <!-- products container ends --> */}
      <ProductForm />
    </div>
  );
}
