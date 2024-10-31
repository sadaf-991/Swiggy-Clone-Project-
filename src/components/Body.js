import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./OnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";


const Body = () => {

  const listOfRestaurants = useRestaurantList();
  
  const filteredRestaurantList = useRestaurantList();
  

  const [searchText, setSearchText] = useState("");

 

  const onlineStatus = useOnlineStatus();

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
            className="rounded-lg h-10 border border-solid border-orange-500"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }} 
            />
            <button className="px-5 py-2 bg-orange-100 hover:bg-orange-500 m-4 rounded-lg"
            onClick={() => {
            
            const filteredRestaurant = listOfRestaurants.filter((res) => {
           return res.info.name
            .toLowerCase().includes(searchText.toLowerCase())
            });

            setfilteredRestaurantList(filteredRestaurant);

            
            }}
            >
            Search
            </button>
          </div>
          <div className="m-4 p-4 flex items-center " >
            <button 
             className="px-4 py-2 bg-orange-100 hover:bg-orange-500 m-4 rounded-lg"
            onClick={() => {
              let filterlogic = listOfRestaurants.filter((res) => 
                { return (res.info.avgRating > 4);
              
            });
            setlistOfRestaurants(filterlogic);  
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