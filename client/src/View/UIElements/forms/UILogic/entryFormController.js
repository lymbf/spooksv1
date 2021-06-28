import { useState } from 'react';
import { useDispatch } from 'react-redux';

import useRedirect from '../../../../Controller/redirect.js';
import { setUser } from '../../../../Controller/redux/reducers/user';
import {addPlayer} from '../../../../Controller/redux/reducers/players';

export default function useEntryFormController() {
	const [nick, setNick] = useState(false);
	let dispatch = useDispatch();
	let { generateGameRoom } = useRedirect();

	const handleSubmit = e => {
		e.preventDefault();
		console.log(nick);
		dispatch(setUser(nick));
		dispatch(addPlayer(nick));
		generateGameRoom();
	};

	return { handleSubmit, setNick };
}
