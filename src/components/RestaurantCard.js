import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
    const { resData } = props;
    
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      sla,
    } = resData?.info;


    return (
    <div className="m-4 p-4 w-[250px] h-[28rem] rounded-lg bg-orange-200 hover:bg-orange-500">
        <img className="w-[350px] h-[200px] rounded-lg"
        alt="res-logo"
        src={
            CDN_URL +
        cloudinaryImageId} />
        
        <h2 className="text-xl font-bold">{name}</h2>
        <h3 className="pt-2">{cuisines.join(", ")} </h3>
        <p>{avgRating}</p>
        <p>{costForTwo}</p>
        <p>{sla.deliveryTime} mins</p>
        
    </div> 
        
        );
     
};

export default RestaurantCard;
    
    