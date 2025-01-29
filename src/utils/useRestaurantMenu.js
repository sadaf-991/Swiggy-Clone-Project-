import { useEffect, useState } from "react"
import { MENU_URL } from "../utils/constants";


const useRestaurantMenu = (resId) => {
const [resInfo, setResinfo] = useState(null);

    useEffect(() => {
        if (!resId) return;
        if (resInfo) return;

        const fetchMenu = async () => {
          try {
            const data = await fetch(MENU_URL + resId);
            const json = await data.json();
            setResinfo(json.data);
          } catch (error) {
            console.error("Error fetching menu:", error);
          }
        };
    
        
          fetchMenu();
        
      }, [resId]); 

   return resInfo;
}

export default useRestaurantMenu;