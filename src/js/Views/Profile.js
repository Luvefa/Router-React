import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

export function Profile() {
	let params = useParams();
	let Friends = useLocation().Friends;
	let history = useHistory();
	let status = Friends.registered ? "Registered" : "Not Registered";
	console.log(params);

	return (
		<div className="row" style={{ marginLeft: "350px" }}>
			<div className="card bg-secundary">
				<div className="card-body text-center">
					<h1>Friend Name: {Friends.name}</h1>
					<h3>Friend Status: {status}</h3>
					<p>Friend ID :{params.id}</p>
					<button onClick={() => history.goBack()}>Go Back</button>
				</div>
			</div>
		</div>
	);
}
