import React from 'react';
import './startingForm.css';

import useStartingFormController from './UILogic/startingFormController';

export default function StartingForm() {
	let { startGame, startEnabled } = useStartingFormController();

	return (
		<div className="starting-form">
			<form>
				<button disabled={!startEnabled()} onClick={startGame}>
					Start the game
				</button>
			</form>
		</div>
	);
}
