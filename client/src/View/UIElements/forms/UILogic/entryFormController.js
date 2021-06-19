import { generateGameRoom } from '../../../../Controller/redirect.js';

export default function useEntryFormController() {
	const handleSubmit = e => {
		e.preventDefault();
		generateGameRoom();
	};

	return { handleSubmit };
}
