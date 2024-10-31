import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

const cartItems = useSelector((store) => store.cart.items);
const dispatch = useDispatch();

const handleClearCart = (cartItems) => {
   dispatch(clearCart(cartItems));
}

    return (
        <div className="">
            <div className="flex justify-between"> 
        <h1 className="mt-6 ml-[33rem] text-2xl font-bold ">Cart</h1>
       <button className="p-4 mt-6 mr-[24rem] items-end rounded-lg font-bold bg-orange-200"
       onClick={handleClearCart}
       >
        Clear Cart</button> 
        
        {
            cartItems.length === 0 && <h1>Add items to your cart!</h1>  
        }
       
       </div>
       <div className="w-6/12 m-auto">
       <ItemList items={cartItems}/>
       </div>
        </div>
    )
}
export default Cart;