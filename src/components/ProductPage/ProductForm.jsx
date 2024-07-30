import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "./../../redux/productSlice/actions";
import Input from "./Input";

const initialValue = {
  name: "",
  category: "",
  imgUrl: "",
  price: "",
  quantity: "",
  inStock: 0,
};

export default function ProductForm() {
  const [formData, setFormData] = useState(initialValue);
  const dispatch = useDispatch();

  function handleChange({ target: { name, value } }) {
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newProduct = {
      ...formData,
      id: crypto.randomUUID(),
      inStock: formData.quantity,
    };
    dispatch(addProduct(newProduct));
  }
  return (
    <div>
      {/* <!-- Product Input Form --> */}
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 text-[#534F4F]"
          id="lws-addProductForm"
        >
          <Input
            id="inputName"
            label="Product Name"
            name="name"
            value={formData.name}
            handleChange={handleChange}
          />

          <Input
            id="category"
            label="Category"
            name="category"
            value={formData.category}
            handleChange={handleChange}
          />

          <Input
            id="imageurl"
            label="Image Url"
            name="imgUrl"
            value={formData.imgUrl}
            handleChange={handleChange}
          />

          <div className="grid grid-cols-2 gap-8 pb-4">
            {/* <!-- price --> */}
            <Input
              label="Price"
              id="price"
              type="number"
              name="price"
              value={formData.price}
              handleChange={handleChange}
            />

            {/* <!-- quantity --> */}
            <Input
              id="quantity"
              type="number"
              label="Quantity"
              name="quantity"
              value={formData.quantity}
              handleChange={handleChange}
            />
          </div>
          {/* <!-- submit button --> */}
          <button type="submit" id="lws-inputSubmit" className="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
