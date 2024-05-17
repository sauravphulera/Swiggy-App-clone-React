import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";

// JSX is not html in js(JSX transpiles before reaching js engine and this is done by parcer(module bundler))

const AppLayout = () => {
	return (
		<div className="app">
			<HeaderComponent />
			<Body />
		</div>
	)
}
//const heading
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);