import User from "./User";
import UserClass from "./UserClass";
const AboutUs = () => {
	return (
		<div>
			<h1>About us</h1>
			<div className="user-card">
				<User name="Saurav Phulera" />
				<UserClass name="Akshay Saini" />
			</div>
		</div>
	)
}

export default AboutUs;