import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {Card, Caption} from "./App";

ReactDOM.render(
	<div>
		<Card />
		<Card />
		<Caption />
		<Card />
		<Card />
	</div>
	,
	document.querySelector("#root")
);
