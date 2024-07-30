import { ADDCART, REMOVECART } from "./actionTypes";

export function addCart(id) {
  return {
    type: ADDCART,
    payload: id,
  };
}

export function removeCart(id) {
  return {
    type: REMOVECART,
    payload: id,
  };
}
