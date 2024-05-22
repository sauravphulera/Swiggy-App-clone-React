// sudy about config driven UI
import RestaurantCart from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { UTILS } from "../constants/constants";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {
	let [allRestaurants, setAllRestaurants] = useState([]);
	let [listOfRestaurants, setListOfRestaurants] = useState([]);
	const [searchTxt, setSearchTxt] = useState('')

	console.log('body rendered')
	useEffect(() => {
		fetchData();
	}, [])

	const fetchData = async () => {
		let data;
		try {
			data = await fetch(UTILS.corsProxy + 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING', {
				headers: {
					'Accept-Encoding': 'identity',
					//'x-cors-api-key': 'temp_2e99df148ba0810fc959505b52ae3cdf'
				}
			});
		} catch (e) {
			console.log(e)
		}
		const res = await data.json();
		const restaurants = res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
		console.log(restaurants);
		setListOfRestaurants([...restaurants]);
		setAllRestaurants([...restaurants]);
	}

	const handleSearch = (event) => {
		if (event.key == 'Enter') {
			const filteredRestaurant = allRestaurants.filter((res) => {
				return res.info.name.toLowerCase().includes(searchTxt.toLocaleLowerCase());
			});
			setListOfRestaurants(filteredRestaurant);
		}
	}

	const onlineStatus = useOnlineStatus();

	if (onlineStatus === false) {
		return <h1>Looks like you are offline!! Please check your internet connection</h1>
	}

	return allRestaurants.length === 0 ? (<Shimmer />) : (
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
					<input className="search-box" type="text" name="search" defaultValue={searchTxt} onKeyDown={handleSearch} onChange={(e) => setSearchTxt(e.target.value)}></input>
				</div>
			</div>
			<div className="res-container">
				{listOfRestaurants.map((resObj, index) =>
					<Link key={resObj.info.id} to={'/restaurant/' + resObj.info.id}>
						<RestaurantCart key={`restaurent-${index}`} resData={resObj.info} />
					</Link>
				)}
			</div>
		</div>
	)
}

export default Body;