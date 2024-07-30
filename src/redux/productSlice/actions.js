import {
  ADDPRODUCT,
  BACKPRODUCT,
  BACKPRODUCTITEM,
  BUYPRODUCT,
} from "./actionTypes";

export function addProduct(product) {
  return {
    type: ADDPRODUCT,
    payload: product,
  };
}

export function buyProduct(id) {
  return {
    type: BUYPRODUCT,
    payload: id,
  };
}

export function backProductItem(id) {
  return {
    type: BACKPRODUCTITEM,
    payload: id,
  };
}

export function backProduct(id) {
  return {
    type: BACKPRODUCT,
    payload: id,
  };
}
