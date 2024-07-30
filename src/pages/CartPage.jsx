import React from "react";
import BillDetails from "../components/CartPage/BillDetails";
import CartContainer from "../components/CartPage/CartContainer";

export default function CartPage() {
  return (
    <div className="container 2xl:px-8 px-2 mx-auto">
      <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
      <div className="cartListContainer">
        <CartContainer />

        {/* <!-- Bill Details --> */}
        <BillDetails />
      </div>
    </div>
  );
}
