import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./OnlineStatus";



const Body = () => {

  
  const [filteredRestaurantList, setfilteredRestaurantList] = useState([]);
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  
  useEffect(() => {
    fetchData();
   },[]);
   
   const fetchData = async () => {
   
   const data = await fetch(
       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
   );
   
   const json = await data.json();
   console.log(json);
   
    setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }  
  
  
  if(onlineStatus === false){
    return <h1>Looks like you are offline please check your connection!!</h1>
  };

    return listOfRestaurants.length === 0 ? (
       <Shimmer /> 
    ) : (
    <div className="body">
      
        <div className="flex items-center">
          <div className="search m-4 p-4">
            <input type="text"
            className="pl-1 focus:border-orange-500 rounded-lg h-10 border border-solid border-orange-600 focus:ring-1 focus:ring-orange-500 focus:outline-none"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }} 
            />
            <button className="px-5 py-2 bg-orange-100 hover:bg-orange-300 m-4 rounded-lg"
            onClick={() => {
            
            const filteredRestaurant = listOfRestaurants.filter((res) => {
           return res.info.name.toLowerCase().includes(searchText.toLowerCase())
            });

            setfilteredRestaurantList(filteredRestaurant);
            }}
            >
            Search
            </button>
          </div>
          <div className="m-4 p-4 flex items-center " >
            <button 
             className="px-4 py-2 bg-orange-100 hover:bg-orange-300 m-4 rounded-lg"
            onClick={() => {
              let filterlogic = listOfRestaurants.filter((res) => {
                 return (res.info.avgRating > 4.3);
            });
            setfilteredRestaurantList(filterlogic);  
           }}  
           
            > Top Rated Restaurants 
            </button>  
            </div>  
        </div>
        
        <div className=" flex flex-wrap justify-center " >
          {
       filteredRestaurantList.map((restaurant) => (
        <Link 
        key={restaurant.info.id} 
        to={"/restaurants/" + restaurant.info.id}
      >
        
        <RestaurantCard 
          resData={restaurant}/> 
          </Link>
        ))}
        </div>
        
    </div>
    );
};

export default Body;