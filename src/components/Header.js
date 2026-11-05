import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  const data = useContext(UserContext);

  // Read the cart items from the Redux store
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50">
      <div className="logo-container">
        <img className="w-60" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-8 text-2xl font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-8 text-2xl font-bold">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-8 text-2xl font-bold">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-8 text-2xl font-bold">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
          {/* <button
            className="login text-xl font-bold"
            onClick={() => {
              btnNameReact == "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
