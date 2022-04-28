import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import WishList from "./pages/WishList";
import ProductDetail from "./pages/ProductDetail";
import { Login } from "./pages/Login";
import { User } from "./pages/User";

import { NavLink } from "react-router-dom";
import { NotFound } from "./pages/404";

const getStyle = ({ isActive }) => {
  return {
    margin: "1rem 0",
    color: isActive ? "red" : ""
  };
};

export default function App() {
  return (
    <div className="App">
      <nav>
        <NavLink style={getStyle} to="/">
          Home
        </NavLink>
        ||
        <NavLink style={getStyle} to="/category">
          Category
        </NavLink>
        ||
        <NavLink style={getStyle} to="/cart">
          Cart
        </NavLink>
        ||
        <NavLink style={getStyle} to="/wishlist">
          WishList
        </NavLink>
        ||
        <NavLink style={getStyle} to="/login">
          Login
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
