import useOnlineStatus from "../Utils/useOnlineStatus";
import { UTILS } from "../constants/constants";
import { Link } from "react-router-dom";

const HeaderComponent = () => {

	const onlineStatus = useOnlineStatus();


	return (
		<div className="flex justify-between shadow-md px-4 border-none outline-none">
			<div className="logo-container flex items-center">
				<img className="w-24" src={UTILS.logo} />
				<div className="pl-4 text-ellipsis font-medium">Saurav Phulera <span className="text-xs pl-2">{onlineStatus ? '🟢' : '🔴'}</span></div>
			</div>
			<div className="nav-items flex items-center">
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About Us</Link></li>
					<li><Link to="/contact">Contact Us</Link></li>
					<li><Link to="/grocery">Grocery</Link></li>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	)
}

export default HeaderComponent;