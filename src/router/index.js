import { Route, Routes } from "react-router-dom";
import ProductDetails from "../pages/productsDetails";
import Home from "../pages/home";
import CartPage from "../pages/cart";
import Checkout from "../pages/checkout";
import Login from "../pages/auth/login";
import Signup from "../pages/auth/signup";
import ResetPassword from "../pages/auth/reset-password";
import UserProfile from "../pages/profile";
import ThankYou from "../pages/thankYou";
import Orders from "../pages/orders";
import Transactions from "../pages/transactions";

function AppRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/reset_password" element={<ResetPassword />} />
      <Route path="/account" element={<UserProfile />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/details/:title" element={<ProductDetails />} />
    </Routes>
  );
}

export default AppRouter;
