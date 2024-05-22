import { useEffect, useState } from "react";
import { UTILS } from "../constants/constants";



const useResutaurantMenu = (resId) => {

	const [resInfo, setResInfo] = useState(null);


	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {

		const data = await fetch(UTILS.corsProxy + UTILS.menuApi + resId);

		console.log(UTILS.corsProxy + UTILS.menuApi + resId);

		const json = await data.json();

		setResInfo(json);
	}

	return resInfo;
}

export default useResutaurantMenu;