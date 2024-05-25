import React, { lazy, Suspense, useState } from "react";
import HeaderComponent from "./components/Header";
import ReactDOM from "react-dom/client"
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./components/About";
import ContactUs from "./components/Contact";
import ErrorPage from "./components/Error";
import RestaurantMenu from "./components/ResutaurantMenu";
import Shimmer from "./components/shimmer";
import UserContext from "./Utils/userContext";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";

// JSX is not html in js(JSX transpiles before reaching js engine and this is done by parcer(module bundler))

const AppLayout = () => {

	const [user, setUser] = useState('admin')

	return (
		<Provider store={appStore}>
			<UserContext.Provider value={{ loggedInUser: user, setUser }}>
				<div className="app">
					<HeaderComponent />

					<Outlet />
				</div>
			</UserContext.Provider>
		</Provider>

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
				path: "/cart",
				element: <Cart />
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