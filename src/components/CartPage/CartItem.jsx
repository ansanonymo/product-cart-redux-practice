import React from "react";
import { useDispatch } from "react-redux";
import { removeCart } from "../../redux/cartSlice/actions";
import {
  backProduct,
  backProductItem,
  buyProduct,
} from "../../redux/productSlice/actions";

export default function CartItem({ product }) {
  const { imgUrl, name, price, category, inStock, quantity, id } = product;
  const totalBuy = quantity - inStock;
  const dispatch = useDispatch();

  const handlePlus = () => {
    dispatch(buyProduct(id));
  };

  const handleMinus = () => {
    dispatch(backProductItem(id));
  };

  const handleDelete = () => {
    dispatch(backProduct(id));
    dispatch(removeCart(id));
  };

  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        {/* <!-- cart image --> */}
        <img className="lws-cartImage" src={imgUrl} alt={name} />
        {/* <!-- cart item info --> */}
        <div className="space-y-2">
          <h4 className="lws-cartName">{name}</h4>
          <p className="lws-cartCategory">Men's clothing</p>
          <p>
            BDT <span className="lws-cartPrice">{price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* <!-- amount buttons --> */}
        <div className="flex items-center space-x-4">
          <button
            disabled={inStock <= 0}
            onClick={handlePlus}
            className="lws-incrementQuantity extra-disable"
          >
            <i className="text-lg fa-solid fa-plus"></i>
          </button>
          <span className="lws-cartQuantity">{totalBuy}</span>
          <button
            disabled={totalBuy <= 0}
            onClick={handleMinus}
            className="lws-decrementQuantity extra-disable"
          >
            <i className="text-lg fa-solid fa-minus"></i>
          </button>
        </div>
        {/* <!-- price --> */}
        <p className="text-lg font-bold">
          BDT <span className="lws-calculatedPrice">{totalBuy * price}</span>
        </p>
      </div>
      {/* <!-- delete button --> */}
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button onClick={handleDelete} className="lws-removeFromCart">
          <i className="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}
