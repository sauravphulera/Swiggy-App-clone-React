import { useState } from "react";
import ItemCard from "./ItemCards";

const RestaurantCategory = ({ items = [], title, showItems, setShowIndex }) => {


	const handleHeaderCLick = () => {
		//setShowItems(!showItems);
		setShowIndex()
	}

	return <div className="shadow-md p-4 mb-4 transition-all duration-500">
		<div className="flex justify-between items-center cursor-pointer p-2" onClick={handleHeaderCLick}>
			<div className="font-bold">{title}</div>
			<div className="text-3xl flex items-center">˯</div>
		</div>
		{
			showItems && (
				<div>
					{
						items.map((item, index) => {

							return <ItemCard data={item} key={item?.card?.info.name} />
						})
					}
				</div>
			)
		}


	</div>
}

export default RestaurantCategory;