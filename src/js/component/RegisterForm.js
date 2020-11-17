import React, { useState } from "react";
import PropTypes from "prop-types";

export function RegisterForm(props) {
	const [value, setValue] = useState("");

	let handleSubmit = e => {
		e.preventDefault();
		if (!value) {
			alert("form cannot be empty");
			return;
		}
		console.log(value);
		props.addFriend(value);
		setValue("");
	};

	return (
		<div className="App">
			<form onSubmit={handleSubmit} id="add-form">
				<input
					type="text"
					className="input"
					value={value}
					placeholder="Type here to add Friends"
					onChange={e => setValue(e.target.value)}
				/>
			</form>
		</div>
	);
}
RegisterForm.propTypes = {
	addFriend: PropTypes.func
};
