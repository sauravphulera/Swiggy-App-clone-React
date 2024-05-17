import { UTILS } from "../constants/constants";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
	return (
		<div className="header">
			<div className="logo-container">
				<img className="logo" src={UTILS.logo} />
			</div>
			<div className="nav-items">
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About Us</Link></li>
					<li><Link to="/contact">Contact Us</Link></li>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	)
}

export default HeaderComponent;