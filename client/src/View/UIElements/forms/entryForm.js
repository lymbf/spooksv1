import React, { useState } from 'react';
import './entryForm.css';

import NickInput from './nickInput';
import useEntryFormController from './UILogic/entryFormController';

export default function EntryForm() {
	const [validNick, setValidNick] = useState(false);

	let { handleSubmit } = useEntryFormController();

	return (
		<div className="entry-form">
			<form>
				<NickInput setValidNick={setValidNick} />
				<button onClick={handleSubmit} disabled={!validNick}>
					Start Game
				</button>
			</form>
		</div>
	);
}
