import React from "react";
import { useSelector } from "react-redux";
import Dummy from "./Dummy";

export default function BillDetails() {
  const products = useSelector((state) => state.product.products);

  const totalPrice = products.reduce((prevTotal, product) => {
    const { inStock, quantity, price } = product;

    return prevTotal + (quantity - inStock) * price;
  }, 0);

  return (
    <div>
      <div className="billDetailsCard">
        <h4 className="mt-2 mb-8 text-xl font-bold text-center">
          Bill Details
        </h4>
        <div className="space-y-4">
          {/* <!-- sub total --> */}
          <div className="flex items-center justify-between">
            <p>Sub Total</p>
            <p>
              BDT <span className="lws-subtotal">{totalPrice}</span>
            </p>
          </div>

          <Dummy />

          {/* <!-- Total --> */}
          <div className="flex items-center justify-between pb-4">
            <p className="font-bold">TOTAL</p>
            <p className="font-bold">
              BDT <span className="lws-total">{totalPrice}</span>
            </p>
          </div>
          <button className="placeOrderbtn">place order</button>
        </div>
      </div>
    </div>
  );
}
