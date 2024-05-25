import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useResutaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

	const { resId } = useParams();
	const resInfo = useResutaurantMenu(resId);
	const [showIndex, setShowIndex] = useState(0)

	if (resInfo === null) return <Shimmer />

	const { name, cuisines, areaName, costForTwoMessage, avgRating, totalRatingsString } = resInfo?.data?.cards[2]?.card?.card?.info;
	const { itemCards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.["REGULAR"]?.cards[1]?.card?.card || [];

	const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((card) => card?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
	console.log(categories)


	return (
		<div className="mx-40 py-10">
			<h1 className="text-2xl font-bold">{name}</h1>

			{/*ating and info card*/}
			<div className="pt-0 px-4 pb-4 bg-custom-gradient rounded-3xl">
				<div className="mt-4 shadow-sm rounded-3xl border border-gray p-6 bg-shitty-white">
					<div className="flex items-center">
						<div className="text-xl text-red-500">☆</div> <div className="pl-2">{avgRating}</div> <div className="pl-2 font-medium">({totalRatingsString})</div> <div className="pl-6 font-medium">{costForTwoMessage}</div>
					</div>
					<div className="flex my-4">
						<div className="font-semibold pr-2">Outlet</div> - <div className="pl-2">{areaName}</div>
					</div>
					<div className="my-2 font-semibold">30 - 35 mins</div>
					<div className="border-y mt-6  border-gray"></div>
					<div className="mt-2 flex font-medium">
						<div>3.7 kms</div><div> | ₹44 Delivery fee will apply</div>
					</div>
				</div>
			</div>
			<div className="mt-8">
				{
					categories.map((item, index) => {
						const { title, type, itemCards } = item?.card?.card;
						return (
							<RestaurantCategory
								key={type || index}
								items={itemCards}
								title={title}
								showItems={index === showIndex ? true : false}
								setShowIndex={() => setShowIndex(index)}
							/>
						)
					})
				}
			</div>
		</div>
	)
}

export default RestaurantMenu;