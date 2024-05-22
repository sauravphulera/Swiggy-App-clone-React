import { useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useResutaurantMenu from "../Utils/useRestaurantMenu";

const RestaurantMenu = () => {

	const { resId } = useParams();
	console.log(resId)
	const resInfo = useResutaurantMenu(resId);
	console.log(resInfo)

	if (resInfo === null) return <Shimmer />

	const { name, cuisines, cloudinaryImageId, costForTwoMessage } = resInfo?.data?.cards[2]?.card?.card?.info;
	const { itemCards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.["REGULAR"]?.cards[1]?.card?.card || [];
	console.log(itemCards);


	return (
		<div className="menu">
			<h1>{name}</h1>
			<h5>{cuisines.join(', ')} - {costForTwoMessage}</h5>
			<ul>
				{
					itemCards.map((item, index) => {
						const { name, price, defaultPrice } = item?.card?.info;
						return (
							<li key={name}>{name} - {price || defaultPrice}</li>
						)
					})
				}
			</ul>
		</div>
	)
}

export default RestaurantMenu;