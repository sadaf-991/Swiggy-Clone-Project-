import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem, addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";



const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1 className="mt-9 mx-20 text-2xl font-bold text-center">Shopping Cart</h1>
      
      <div className="md:w-6/12 w-screen md:m-auto m-3">
        {cartItems.length === 0 ? (
          <h1 className="font-bold text-3xl text-center my-32">Cart is empty! Add Items to the cart! 🛒</h1>
        ) : (
          <>
          <div className="flex justify-between border-b-2 border-gray-200">
            <button
              className="text-orange-400 hover:text-white hover:bg-orange-300 font-bold p-2 m-2 bg-black rounded-lg"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
            <p className="ml-10 font-bold text-lg mt-5">Total Price: ₹ {totalPrice / 100}</p>
            </div>
        
            {cartItems?.map((item) => (
              <div
                key={item.id}
                className="border-gray-200 border-b-2 p-2 m-2 text-left flex justify-between"
              >
                <div className="md:w-9/12">
                  <div className="font-bold space-x-2 mt-5">
                    <span>{item.name}</span>         
                    <span> - ₹ {item.price / 100 || 0}</span>
                  </div>
                  <p className="text-sm mt-5">{item.description}</p>
                  
                </div>

                

                <div className="md:w-3/12 md:p-4 flex justify-end"> 
                <div className="absolute"> 
                
                  <button 
                    className="w-8 h-8 rounded-lg bg-green-500 text-white"
                    onClick={() => dispatch(addItem(item))}
                  >
                    +
                  </button>
                  <span className="mx-4 bg-orange-600 rounded-lg px-2 font-bold text-white">{item.quantity}</span>
                  <button 
                    className="w-8 h-8 rounded-lg bg-red-500 text-white"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    -
                  </button>
                  </div>
                  <img className="md:w-[60%] w-[50%] md:mt-4 "
                  alt={item.name}
                  src={item.imageId ? CDN_URL + item.imageId : "fallback-image-url" }
                  onError={(e) => { 
                   e.target.onerror = null; 
                   e.target.src = 'fallback-image-url';
                   }} />
                   
                   
                </div>
                
              </div>
              
            ))}
            

                      </>
        )}
      </div>
    </div>
  );
};

export default Cart;