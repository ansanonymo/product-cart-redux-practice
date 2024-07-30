import { ADDCART, REMOVECART } from "./actionTypes";

const initialValue = {
  productIds: new Set(),
};

export default function cartReducer(state = initialValue, action) {
  switch (action.type) {
    case ADDCART: {
      const newSet = new Set([...state.productIds.values()]);
      newSet.add(action.payload);
      return { ...state, productIds: newSet };
    }
    case REMOVECART: {
      const newSet = new Set([...state.productIds.values()]);
      newSet.delete(action.payload);
      return { ...state, productIds: newSet };
    }
    default: {
      return { ...state };
    }
  }
}
