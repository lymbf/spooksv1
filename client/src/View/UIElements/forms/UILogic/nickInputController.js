import { useState } from 'react';

export default function useEntryFormController(setValidNick) {
	const [error, setError] = useState('Minimum length 5 chars.');
	const [blur, setBlur] = useState(false);

	const handleInputChange = e => {
		if (e.target.value.length > 4) {
			setError(false);
			setValidNick(true);
		} else {
			setError('Minimum length 5 chars.');
			setValidNick(false);
		}
	};

	return {
		error,
		handleInputChange,
		blur,
		setBlur
	};
}
