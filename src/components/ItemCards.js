import { useDispatch } from "react-redux";
import { UTILS } from "../constants/constants";
import { addItem } from "../Utils/cartSlice";

const ItemCard = ({ data }) => {

	const { name, price, description, defaultPrice, imageId } = data?.card?.info;

	const dispatch = useDispatch();

	const handleAddItem = () => {
		dispatch(addItem(data))
	}


	return <div className="flex justify-between">
		{/*left*/}
		<div className="basis-4/5 p-2">
			<div className="font-medium text-md">{name}</div>
			<div className="my-2">₹{price ? price : defaultPrice / 100}</div>
			<div className="mt-2 text-sm text-warmGray-400">
				{description}
			</div>
		</div>

		{/*right*/}
		<div className="p-2">
			<div>
				<img src={UTILS.imageURLRestaurant + imageId} className="w-40 h-40" />
				<div className="absolute">
					<button className="py-2 shadow-md text-green-700 bg-white rounded-lg px-6 relative left-10 bottom-8 text-sm font-semibold"
						onClick={handleAddItem}
					>
						Add
					</button>

				</div>
			</div>
		</div>
	</div>

}

export default ItemCard;