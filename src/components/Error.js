import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const err = useRouteError();
	console.log(err);
	return (
		<div className="flex align-center justify-center direction-column">
			<div className="error-heading"><h1>Oooops Something Went Wrong!</h1></div>
			<div className="error-message">{err.status} <span>{err.statusText}</span></div>
		</div>)
}

export default ErrorPage;