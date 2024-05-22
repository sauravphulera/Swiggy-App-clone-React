import useOnlineStatus from "../Utils/useOnlineStatus";
import { UTILS } from "../constants/constants";
import { Link } from "react-router-dom";

const HeaderComponent = () => {

	const onlineStatus = useOnlineStatus();


	return (
		<div className="header">
			<div className="logo-container">
				<img className="logo" src={UTILS.logo} />
			</div>
			<div className="nav-items">
				<ul>
					<li className="flex align-center fs12">
						Online Status: {onlineStatus ? '🟢' : '🔴'}
					</li>
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