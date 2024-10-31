import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "./OnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

  const [btnNameReact, setbtnNameReact] = useState("Login");

  const {userLoggedIn} = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

    return (  <div className="flex justify-between bg-orange-200 shadow-lg">
          <div className="logo-container">
                  <img className="w-20" 
                  src={LOGO_URL}/>
              </div>
          <div className="flex items-center">
              <ul className="flex p-4 m-4">
                <li className="px-4">
                  <p className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</p>
                </li>
              <li className="px-4">
                <Link to="/" className="nav-link" >Home</Link>
                </li>
              <li className="px-4">
                <Link to="/about" className="nav-link">About Us</Link>
              </li>
              <li className="px-4">
              <Link to="/contact" className="nav-link"> Contact Us</Link>
              </li>
              <li className="px-4">
              <Link to="/cart"> Cart - ({cartItems.length} items)</Link>
              </li>
              <li className="px-4">
              <Link to="/grocery" className="nav-link">Grocery </Link>
              </li>
              <li className="px-4 font-bold">
              {userLoggedIn}
              </li>
              <button className="log-in"
              onClick={() => {
               btnNameReact === "Login"
               ? setbtnNameReact("Logout") 
               : setbtnNameReact("Login")
      
              }}
              >{btnNameReact}</button>
              </ul>
          </div>
      </div>
    );
  };

export default Header;  