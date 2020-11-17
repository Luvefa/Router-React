import React, { useState } from "react";

import { FriendsCard } from "./FriendsCard.js";
import { RegisterForm } from "./RegisterForm.js";

export function FriendsList() {
	const [Friends, setFriends] = useState([
		{ name: "Leo", registered: false },
		{ name: "Jacob", registered: false },
		{ name: "Lea", registered: true },
		{ name: "Jacke", registered: false }
	]);

	const RegisterFriend = idx => {
		const newList = [...Friends];
		newList[idx].registered = !newList[idx].registered;
		setFriends(newList);
	};
	const AddFriend = value => {
		const newList = [...Friends, { name: value, registered: false }];
		setFriends(newList);
	};

	return (
		<div className="container">
			<div className="row" style={{ marginLeft: "200px" }}>
				<RegisterForm addFriend={AddFriend} />
			</div>
			<div className="row">
				{Friends.map((Friends, index) => (
					<FriendsCard
						key={index}
						index={index}
						//name={Friends.name}
						//registered={Friends.registered}
						register={RegisterFriend}
						Friends={Friends}
					/>
				))}
			</div>
			<br />
		</div>
	);
}
