import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./Header.js";
//import { Navbar } from "./Navbar.js";
import { FriendsList } from "./FriendsList.js";
import { Footer } from "./Footer.js";
import { About } from "../Views/About.js";
import { Profile } from "../Views/Profile.js";
//create your first component
export function Home() {
	return (
		<div className="container">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" />
					<Route path="/Friends" component={FriendsList}>
						<FriendsList />
					</Route>
					<Route path="/Profile/:id">
						<Profile />
					</Route>
					<Route path="/About" component={About}>
						<About />
					</Route>
				</Switch>
				<Footer />
			</Router>
			<br />
		</div>
	);
}
