import React from 'react';
import './joinForm.css';

import useJoinFormController from './UILogic/joinFormController';

export default function JoinForm() {
	let {
		blur,
		setBlur,
		handleInputChange,
		error,
		submitForm
	} = useJoinFormController();

	return (
		<div className="join-form">
			<form>
				<label>
					Enter your Nick:
					<input
						type="text"
						onBlur={() => {
							setBlur(true);
						}}
						onChange={handleInputChange}
					/>
					{error &&
						blur &&
						<div className="error">
							{error}
						</div>}
				</label>

				<button onClick={submitForm} disabled={error}>
					Join the game room
				</button>
			</form>
		</div>
	);
}
