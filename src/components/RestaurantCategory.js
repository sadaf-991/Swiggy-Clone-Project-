import ItemList from './ItemList';


const RestaurantCategory = ({data, showItems, setShowIndex}) => {
console.log(data);
    
    
    return ( 
    <div>
        <div className="w-6/12 bg-orange-100 mx-auto my-4 px-3 p-4 shadow-lg ">
        <div 
        
        className='flex justify-between cursor-pointer'
        onClick={setShowIndex}
        >
           <span className="font-bold  text-lg ">
            {data.title} ({data.itemCards.length})</span>
           <span>⬇️</span>
           
           </div>
           {showItems && <ItemList items={data.itemCards}/> }  
        </div>      
    </div>
    );
}

export default RestaurantCategory;