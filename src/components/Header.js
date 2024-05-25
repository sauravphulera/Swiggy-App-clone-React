import { useContext } from "react";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { UTILS } from "../constants/constants";
import { Link } from "react-router-dom";
import UserContext from "../Utils/userContext";
import { useSelector } from "react-redux";

const HeaderComponent = () => {

	const onlineStatus = useOnlineStatus();

	console.log(useContext(UserContext));
	const { loggedInUser } = useContext(UserContext);

	//subscribing to the store
	const cartItems = useSelector((store) => store.cart.items);
	console.log(cartItems)

	return (
		<div className="flex justify-between shadow-md px-4 border-none outline-none">
			<div className="logo-container flex items-center">
				<img className="w-24" src={UTILS.logo} />
				<div className="pl-4 text-ellipsis font-medium">{loggedInUser} <span className="text-xs pl-2">{onlineStatus ? '🟢' : '🔴'}</span></div>
			</div>
			<div className="nav-items flex items-center">
				<ul className="flex items-center">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About Us</Link></li>
					<li><Link to="/contact">Contact Us</Link></li>
					<li><Link to="/grocery">Grocery</Link></li>
					<li><Link to="/cart">
						<div className="flex">
							<img src={UTILS.cartIcon} className="w-8" />
							<div className="p bg-red-400 text-white rounded-full w-4 h-4 flex justify-center items-center text-sm">
								{cartItems.length}
							</div>
						</div>
					</Link></li>
				</ul>
			</div>
		</div>
	)
}

export default HeaderComponent;