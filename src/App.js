import React, { lazy, Suspense } from "react";
import HeaderComponent from "./components/Header";
import ReactDOM from "react-dom"
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./components/About";
import ContactUs from "./components/Contact";
import ErrorPage from "./components/Error";
import RestaurantMenu from "./components/ResutaurantMenu";
import Shimmer from "./components/shimmer";

// JSX is not html in js(JSX transpiles before reaching js engine and this is done by parcer(module bundler))

const AppLayout = () => {
	return (
		<div className="app">
			<HeaderComponent />
			<Outlet />
		</div>
	)
}

const Grocery = lazy(() => import("./components/Grocery"));

//routing config
const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Body />
			},
			{
				path: "/about",
				element: <AboutUs />
			},
			{
				path: "/contact",
				element: <ContactUs />
			},
			{
				path: "/grocery",
				element: <Suspense fallback={< Shimmer />} ><Grocery /></Suspense>
			},
			{
				path: "/restaurant/:resId",
				element: <RestaurantMenu />
			},

		]
	},

]);

//const heading
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);