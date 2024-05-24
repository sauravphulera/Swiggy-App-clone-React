import { UTILS } from '../constants/constants';


const RestaurantCart = ({ resData }) => {
	const { name, cuisines, avgRating, costForTwoString, sla } = resData
	return (
		//resData.cloudinaryImageId
		<div className="res-card">
			<img className="res-logo" alt="res-logo" src={UTILS.imageURLRestaurant + resData.cloudinaryImageId} />
			<h3 className="res-details">{name}</h3>
			<div className="res-details">{cuisines.join(", ")}</div>
			<div className="res-details">{avgRating} Stars</div>
			<div className="res-details">{costForTwoString}</div>
			<div className="res-details">{sla?.deliveryTime} minutes</div>
		</div>
	)
}


// higher order component

export const withPromotedLabel = (RestaurantCard) => {
	return (props) => {
		console.log('in')
		return (
			<div>
				<label>Veg is veg</label>
				<RestaurantCard {...props} />
			</div>
		)
	}
}
export default RestaurantCart;