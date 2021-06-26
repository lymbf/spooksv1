import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../../Controller/redux/reducers/user';

export default function useJoinFormController() {
	let [nick, setNick] = useState('');
	let [blur, setBlur] = useState(false);
	let [error, setError] = useState('Enter min. 5 char.');

	let dispatch = useDispatch();

	let handleInputChange = e => {
		if (e.target.value.length > 4) {
			setError(false);
		} else {
			setError('Enter min. 5 char.');
		}
		setNick(e.target.value);
	};

	let submitForm = e => {
		e.preventDefault();
		dispatch(setUser(nick));
	};

	return { blur, setBlur, handleInputChange, error, submitForm };
}
