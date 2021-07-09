import React from 'react';
import './clueForm.css';

export default function ClueForm() {
	return (
		<div className="clue-form">
			<form>
				<label>
					Clue: <input type="text" />
				</label>
			</form>
		</div>
	);
}
