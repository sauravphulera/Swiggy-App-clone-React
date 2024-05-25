import { useDispatch, useSelector } from "react-redux";
import ItemCard from "./ItemCards";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
	const cartItems = useSelector((store) => store.cart.items)
	const dispatch = useDispatch();
	const handleClearCart = () => {
		dispatch(clearCart());
	}
	return (
		<div className="text-center flex flex-col items-center justify-center">
			<div>Cart</div>
			<div className="w-8/12 mt-10 border border-gray rounded-lg p-4">
				{
					...cartItems.map((item) => {
						return <ItemCard data={item} key={item?.card?.info?.name} />
					})
				}
			</div>
			<div> <button className="p-2 mt-4 rounded-md	 bg-red-500 text-shitty-white hover:bg-red-400"
				onClick={handleClearCart}>
				Clear Cart</button> </div>
		</div>
	)

}

export default Cart;