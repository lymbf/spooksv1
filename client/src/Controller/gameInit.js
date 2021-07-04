import { useEffect } from 'react';
import io from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';

// >>> Redux imports <<<<

import { setGameRoom, setCaptain_1, setCaptain_2 } from './redux/reducers/game';
import { addPlayer } from './redux/reducers/players';
import { setSocket } from './redux/reducers/socket';
import { setUserId } from './redux/reducers/user';

// >>> Events/Listeners imports <<<

import useAddRoomListeners from './listeners/gameRoomListeners';

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

		socket.on('connect', () => {
			dispatch(setUserId(socket.id));
		});
		dispatch(setSocket(socket));

		// >>>> get initial game state <<<<<

		socket.on('init_state', payload => {
			console.log('heres payload:');
			console.log(payload);
			if (payload) {
				payload.users.forEach(user => {
					dispatch(
						addPlayer({
							name: user.name,
							id: user.id,
							team: user.team,
							captain: user.captain
						})
					);
					if (user.captain) {
						if (user.team === 1) {
							dispatch(
								setCaptain_1({
									id: user.id,
									name: user.name
								})
							);
						} else {
							dispatch(
								setCaptain_2({
									id: user.id,
									name: user.name
								})
							);
						}
					}
				});
			} else {
				console.log('error');
			}
		});

		//>>>>> Connect Listeners <<<<<

		console.log('game started');
	}, []);

	useAddRoomListeners();
}
