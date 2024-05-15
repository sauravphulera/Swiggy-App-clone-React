import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
	React.createElement("div", { id: "child" }, [
	  React.createElement("h1", {}, "I'm an h1 tag with some data"),
	  React.createElement("h2", {}, "I'm an h2 tag with"),
	]),
	React.createElement("div", { id: "child2" }, [
	  React.createElement("h1", {}, "I'm an h1 tag with some"),
	  React.createElement("h2", {}, "haha I am also an h2 tag"),
	]),
  ]);
  
  //JSX
  
  console.log(parent); // object
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(parent);