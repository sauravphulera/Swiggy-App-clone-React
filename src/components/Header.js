import { UTILS } from "../constants/constants";

const HeaderComponent = () => {
	return (
		<div className="header">
			<div className="logo-container">
				<img className="logo" src={UTILS.logo} />
			</div>
			<div className="nav-items">
				<ul>
					<li>Home</li>
					<li>About us</li>
					<li>Contact Us</li>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	)
}

export default HeaderComponent;