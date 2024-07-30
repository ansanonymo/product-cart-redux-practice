import React from "react";
import { useDispatch } from "react-redux";
import { buyProduct } from "../../redux/productSlice/actions";
import { addCart } from "./../../redux/cartSlice/actions";

const defaultProducts = {
  name: "",
  category: "",
  imgUrl: "",
  price: "",
  quantity: "",
};

export default function ProductCart({ product = defaultProducts }) {
  const { name, category, imgUrl, price, quantity, inStock, id } = product;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addCart(id));
    dispatch(buyProduct(id));
  };

  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={imgUrl} alt={name} />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{name}</h4>
        <p className="lws-productCategory">{category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{inStock}</span>
          </p>
        </div>
        <button
          className="lws-btnAddToCart"
          onClick={handleClick}
          disabled={inStock <= 0}
        >
          {inStock > 0 ? "Add To Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
}
