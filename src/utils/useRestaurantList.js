import { useState, useEffect } from 'react';



const useRestaurantList = () => {

const [listOfRestaurants, setlistOfRestaurants] = useState([]);
const [filteredRestaurantList, setfilteredRestaurantList] = useState([]);

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

};
return (
    listOfRestaurants,
    filteredRestaurantList
);
}
export default useRestaurantList;