import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import rigoImage from "../../img/rigo-baby.jpg";

export function FriendsCard(props) {
	let registerBtn = "Register";
	let btnClass = "btn-success";
	if (props.Friends.registered == true) {
		registerBtn = "Unregister";
		btnClass = "btn-danger";
	}
	console.log(props.Friends);

	return (
		<div className="card-columns">
			<div className="row">
				<img src={rigoImage} className="card-img" alt="..." />
			</div>
			<div className="card bg-secundary">
				<div className="card-body text-center">
					<h5 className="card-title">
						Friend Name:
						{props.Friends.name}
					</h5>
					<p className="card-text">
						Friend:
						{props.index}
					</p>
					<p
						className="card-text"
						style={{
							color: props.Friends.registered ? "green" : "red"
						}}>
						Registered: {props.Friends.registered.toString()}
					</p>
					<button
						className={"btn " + btnClass}
						onClick={() => props.register(props.index)}>
						{registerBtn}
					</button>
					<Link
						className={"btn btn-info"}
						//to={`/profile/${props.index}`}>
						style={{ marginLeft: "10px" }}
						to={{
							pathname: "/profile/" + props.index,
							Friends: props.Friends
						}}>
						{" "}
						View Profile
					</Link>
				</div>
			</div>
			<br />
		</div>
	);
}

FriendsCard.propTypes = {
	index: PropTypes.number,
	//name: PropTypes.string,
	//registered: PropTypes.bool,
	register: PropTypes.func,
	Friends: PropTypes.object
};
