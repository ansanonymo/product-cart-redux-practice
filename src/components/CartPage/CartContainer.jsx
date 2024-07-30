import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function CartContainer() {
  const productIds = useSelector((state) => state.cart.productIds);
  const products = useSelector((state) => state.product.products);

  const cartProducts = [];

  for (let product of products) {
    if (productIds.has(product.id)) cartProducts.push(product);
  }

  return (
    <div className="space-y-6">
      {cartProducts?.length ? (
        cartProducts.map((product) => {
          return <CartItem product={product} key={product.id} />;
        })
      ) : (
        <h1>Your Cart is Empty!!</h1>
      )}
    </div>
  );
}
