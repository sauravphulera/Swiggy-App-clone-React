import { RESTAURANTLIST } from "../constants/restaurantList";

const Shimmer = () => {
	return (
		<div className="shimmer-ui-container">
			<div className="filter flex align-center">
				<div className="shimmer-btn"></div>
				<div className="shimmer-btn"></div>
				<div className="shimmer btn"></div>
			</div>
			<div className="shimmer-card-container flex flex-wrap">
				{
					[...RESTAURANTLIST].map((value, index) => {
						return <div className="shimmer-cards" key={value + index}>
							<div className="shimmer-res-logo"></div>
						</div>
					})
				}
			</div>
		</div>
	)
}

export default Shimmer;