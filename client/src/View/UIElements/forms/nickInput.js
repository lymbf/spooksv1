import React from 'react';
import './nickInput.css';

import useEntryFormController from './UILogic/nickInputController';

export default function NickInput({ setValidNick }) {
	let { error, blur, setBlur, handleInputChange } = useEntryFormController(
		setValidNick
	);

	return (
		<div className="nick-input">
			<label>
				Nickname
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
		</div>
	);
}
