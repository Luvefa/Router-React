import React from "react";

import { Link } from "react-router-dom";

export function Navbar() {
	return (
		<nav className="navbar navbar-expand-sm bg-light navbar-light">
			<h1>
				{" "}
				<i className="fas fa-gamepad" />
			</h1>
			<a className="navbar-brand" href="#" />

			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#collapsibleNavbar">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="collapsibleNavbar">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<Link className="nav-link" to="/">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="Friends">
							Friends
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="About">
							About
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
