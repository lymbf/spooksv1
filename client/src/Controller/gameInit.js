import { useEffect } from 'react';
import io from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';

// >>> Redux imports <<<<

import { setGameRoom } from './redux/reducers/game';

export default function useGameInit() {
	let dispatch = useDispatch();
	let user = useSelector(state => state.user);

	useEffect(() => {
		// >>> set roomName state <<<

		let query = window.location.search;
		let params = new URLSearchParams(query);
		let room = params.get('id');
		dispatch(setGameRoom(room));

		// >>> init socket connection / join room  <<<
		const socket = io('http://localhost:5000/', {
			query: {
				room: room,
				user: user.name
			}
		});

		console.log('game started');
	}, []);
}
