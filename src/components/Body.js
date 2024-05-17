// sudy about config driven UI
import RestaurantCart from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const Body = () => {
	let [allRestaurants, setAllRestaurants] = useState([]);
	let [listOfRestaurants, setListOfRestaurants] = useState([]);
	const [searchTxt, setSearchTxt] = useState('')

	console.log('body rendered')
	useEffect(() => {
		fetchData();
	}, [])

	const fetchData = async () => {
		const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
		const res = await data.json();
		const restaurants = res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
		console.log(restaurants);
		setListOfRestaurants([...restaurants]);
		setAllRestaurants([...restaurants]);
	}

	return listOfRestaurants.length === 0 ? (<Shimmer />) : (
		<div className="body">
			<div className="flex align-center">
				<div className="filter">
					<button className="filter-btn mr8" onClick={() => {
						listOfRestaurants = listOfRestaurants.filter((res) => res.info.avgRating > 4);
						setListOfRestaurants(listOfRestaurants);
						console.log(listOfRestaurants)
					}}>Top Rated Restaurants</button>

					<button className="filter-btn" onClick={() => {
						listOfRestaurants = [...allRestaurants];
						//console.log(resList)
						//setListOfRestaurants(listOfRestaurants)
					}}>Show All</button>
				</div>
				<div className="search">
					<input className="search-box" type="text" name="search" value={searchTxt}></input>
				</div>
			</div>
			<div className="res-container">
				{listOfRestaurants.map((resObj, index) => <RestaurantCart key={`restaurent-${index}`} resData={resObj.info} />)}
			</div>
		</div>
	)
}

export default Body;