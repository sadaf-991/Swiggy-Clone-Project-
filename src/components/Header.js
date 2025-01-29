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
  const [IsOpen, setIsOpen] = useState(false);

  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);
 

    return (  <div className="">
          <nav className="w-full bg-orange-200 shadow-lg ">
          <div className="flex whitespace-nowrap max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
              <div className="container mx-auto flex items-center justify-between">
                  <img className="w-20 rounded-full" 
                  src={LOGO_URL}/>
                  
              </div>
              {/** Desktop Menu */}
          <div className="hidden md:flex space-x-2">
            
              <ul className="flex items-center p-4 m-4">
                <li className="">
                  <p className="">Online Status: {onlineStatus ? "✅" : "🔴"}</p>
                </li>
              <li className="px-4">
                <Link to="/" className="nav-link" >Home</Link>
                </li>
              <li className="px-4">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="px-4">
              <Link to="/contact" className="nav-link"> Contact</Link>
              </li>
              <li className="px-4 text-2xl">
              <Link to="/cart"> 🛒-{cartItems.length}</Link>
              </li>
              <li className="px-4">
              <Link to="/grocery" className="nav-link">Grocery </Link>
              </li>
              <li className="px-4 font-bold">
              {userLoggedIn}
              </li>
              <li className="">
              <button className="w-24 border border-black px-4 py-2 rounded"
              onClick={() => {
               btnNameReact === "Login"
               ? setbtnNameReact("Logout") 
               : setbtnNameReact("Login")
      
              }}
              >{btnNameReact}</button>
              </li>
              </ul>
              
              </div>
               {/* Mobile Hamburger Icon */}
               <div className="md:hidden w-screen flex justify-end">
              <button
          className="md:hidden text-black block py-5 font-bold"
          onClick={() => setIsOpen(!IsOpen)}
          >
            {IsOpen ? "Close" : "Menu"}
                </button>
                </div>
                </div>

          {/* Mobile Menu */}
          {IsOpen && (
        <div className="md:hidden ">
         
              <ul className="py-1 text-center font-semibold space-y-3">
                <li className=" px-4 ">
                  <p className="mt-1 px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</p>
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
              <li className="px-4 ">
              <Link to="/cart"> 🛒 - {cartItems.length}</Link>
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
          )}
          </nav>
      </div>
    );
  };

export default Header;  