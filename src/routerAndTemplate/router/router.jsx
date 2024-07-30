import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ProductPage from "../../pages/ProductPage";
import Template from "../template/Template";
import CartPage from "./../../pages/CartPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Template />}>
      <Route path="/" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Route>
  )
);

export default router;
