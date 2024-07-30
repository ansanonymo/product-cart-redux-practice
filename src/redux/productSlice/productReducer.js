import {
  ADDPRODUCT,
  BACKPRODUCT,
  BACKPRODUCTITEM,
  BUYPRODUCT,
} from "./actionTypes";

const initialState = {
  products: [],
};

const products = {
  name: "",
  category: "",
  imgUrl: "",
  price: "",
  quantity: "",
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case ADDPRODUCT: {
      const newList = [...state.products];
      newList.push(action.payload);

      return { ...state, products: newList };
    }
    case BUYPRODUCT: {
      const id = action.payload;
      const newList = state.products.map((product) => {
        if (product.id !== id) {
          return product;
        }

        return {
          ...product,
          inStock: product.inStock > 0 ? product.inStock - 1 : 0,
        };
      });

      return { ...state, products: newList };
    }
    case BACKPRODUCTITEM: {
      const id = action.payload;
      const newList = state.products.map((product) => {
        if (product.id !== id) {
          return product;
        }

        return {
          ...product,
          inStock:
            product.quantity > product.inStock
              ? product.inStock + 1
              : product.inStock,
        };
      });

      return { ...state, products: newList };
    }
    case BACKPRODUCT: {
      const id = action.payload;
      const newList = state.products.map((product) => {
        if (product.id !== id) {
          return { ...product };
        }

        return {
          ...product,
          inStock: product.quantity,
        };
      });
      return { ...state, products: newList };
    }
    default: {
      return { ...state };
    }
  }
}
