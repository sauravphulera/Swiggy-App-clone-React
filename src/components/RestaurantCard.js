import { useContext } from 'react';
import { UTILS } from '../constants/constants';
import UserContext from '../Utils/userContext';


const RestaurantCart = ({ resData }) => {

	console.log(useContext(UserContext))
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
			{/*<div className="res-details">{loggedInUser}</div>*/}
		</div>
	)
}


// higher order component

export const withPromotedLabel = (RestaurantCard) => {
	return (props) => {
		return (
			<div>
				<div className='absolute z-50'>
					<div className='border-green-700 border-2 bg-white p px-2 top-3 left-3 relative'>
						<div className='text-green-700 font-bold text-sm'>Veg</div>
					</div>
				</div>

				<RestaurantCard {...props} />
			</div>
		)
	}
}
export default RestaurantCart;