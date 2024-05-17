import React from "react";
class UserClass extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		}
	}

	render() {
		const { name } = this.props;
		return (
			<div className="user-card">
				<h2 onClick={() => {
					this.setState({
						count: this.state.count + 1,
					})
				}}>{name} - {this.state.count}</h2>
				<h5>Location: Dehradun</h5>
				<h6>Contact: 9897453547</h6>
			</div>
		)
	}
}

export default UserClass;