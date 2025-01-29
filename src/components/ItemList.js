import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { useParams } from "react-router-dom";

const ItemList = ({items}) => { 
  
  if (!items || items.length === 0) {
  return <p>No items in the cart!</p>;
}

const dispatch = useDispatch();  


  
// console.log("products", products);

const handleAddItem = (item) => {
  if (!item?.card?.info) return;
 
  const product = {
 
    id: item.card?.info?.id,
    name: item.card?.info?.name,
    description: item.card?.info?.description || '',
    price: item.card?.info?.price || item.card?.info?.defaultPrice || 0,
    imageId: item.card?.info?.imageId || '',
  };

  dispatch(addItem(product));  
}; 


return (
    <div>
        {items.map((product) => (
            <div key={product.card?.info?.id}
            className="p-2 m-2 border-white border-b-2 text-left flex justify-between"
            >
              
            <div className="w-9/12">
            <div className="font-bold space-x-2 mt-5">
            <span>{product.card?.info?.name}</span>         
            <span> - ₹ 
            {product.card?.info?.price/100 || 0}
            </span>
            </div>
            <p className="text-sm mt-5">{product.card?.info?.description}</p>
          </div>
         
          <div className="w-3/12 p-4">  
            <div className="absolute">
                
            <button className="w-14 h-9  over rounded-lg bg-black text-white"
            onClick={() => handleAddItem(product)}
            >
              ADD</button>
            </div>
            <img alt={product.name}
            src={
              product.card?.info?.imageId ? CDN_URL + product.card?.info?.imageId : "fallback-image-url" }
                onError={(e) => { 
                  e.target.onerror = null; 
                  e.target.src = 'fallback-image-url';
                 }} 
                />
            </div>
            
          </div>
          
       ))}

    </div>

);

};

export default ItemList;