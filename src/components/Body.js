import RestaurantCard from "./RestaurantCard.js";
import resObj from "../utils/mockdata.js";
import { useState, useEffect } from "react";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState();

    // useEffect() is called after our component has been rendered
    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139298&lng=77.2088282&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        //Optional chaining
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return (
        <div className="body">
            <div className="Search">
                <div className="filter-search">
                <input type="text" value = {searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }}></input>
                <button className="search-btn" onClick = {
                    () => {
                        const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));   
                        setFilteredRestaurant(filteredRestaurant);
                    }
                }>
                    Search
                </button>
                </div>
                
                <button className = "btn" 
                onClick={ () => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setListOfRestaurants(filteredList);
                }}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {
                filteredRestaurant.map(restaurant => <RestaurantCard key={restaurant.info.id} resdata = {restaurant}/>)
                }
            </div>
        </div>
    )
}

export default Body;