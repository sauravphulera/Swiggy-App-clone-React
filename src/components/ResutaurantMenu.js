import { useEffect, useState } from "react";
import { UTILS } from "../constants/constants";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

	const [resInfo, setResInfo] = useState(null);

	const { resId } = useParams();
	console.log(resId)

	useEffect(() => {
		fetchMenu();
	}, [])

	const fetchMenu = async () => {
		const data = await fetch(UTILS.menuApi + resId);
		const res = await data.json();
		setResInfo(res);
		console.log(res);
	}
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