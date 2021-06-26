import React, { useState } from 'react';
import './entryForm.css';

import NickInput from './nickInput';
import useEntryFormController from './UILogic/entryFormController';

export default function EntryForm() {
	const [validNick, setValidNick] = useState(false);

	let { handleSubmit, setNick } = useEntryFormController();

	return (
		<div className="entry-form">
			<form>
				<NickInput
					setValidNick={setValidNick}
					setNick={setNick}
				/>
				<button onClick={handleSubmit} disabled={!validNick}>
					Start Game
				</button>
			</form>
		</div>
	);
}
