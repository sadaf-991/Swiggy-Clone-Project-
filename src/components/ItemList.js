import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {

const dispatch = useDispatch();  

const handleAddItem = (item) => {
  dispatch(addItem(item));
}

return (
    <div>
        {items.map((item) => (
            <div key={item.card.info.id}
            className="p-2 m-2 border-white border-b-2 text-left flex justify-between"
            >
              
            <div className="w-9/12">
            <div className="font-bold space-x-2 mt-5">
            <span>{item.card.info.name}</span>         
            <span> - ₹ 
            {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}
            </span>
            </div>
            <p className="text-sm mt-5">{item.card.info.description}</p>
          </div>
         
          <div className="w-3/12 p-4">  
            <div className="absolute">
                
            <button className="w-14 h-9  over rounded-lg bg-black text-white"
            onClick={() => handleAddItem(item)}
            >
              ADD</button>
            </div>
            <img 
            src={
                CDN_URL + 
                item.card.info.imageId 
            } />
            </div>
          </div>
       ) )}

    </div>

);

};

export default ItemList;