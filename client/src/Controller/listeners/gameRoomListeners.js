import {
	addPlayer,
	removePlayer,
	addTeam,
	addCaptain
} from '../redux/reducers/players';
import { setTeam, setCaptain } from '../redux/reducers/user';
import {
	setCaptain_1,
	setCaptain_2,
	removeCaptain
} from '../redux/reducers/game';

import { setSession, setBoard } from '../redux/reducers/session';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

let findPlayerById = (players, id) => {
	let i;
	for (var j = 0; j < players.length; j++) {
		if (players[j].id === id) {
			i = j;
			break;
		}
	}
	return i;
};

let useAddRoomListeners = () => {
	let user = useSelector(state => state.user);
	let players = useSelector(state => state.players);
	let socket = useSelector(state => state.socket);
	let dispatch = useDispatch();

	useEffect(
		() => {
			if (socket) {
				// >>>>>>>>>> Handling Joining Room <<<<<<<<<<<<<

				socket.on('player_joined', payload => {
					console.log(payload.player + ' has joined');
					dispatch(
						addPlayer({
							name: payload.player,
							id: payload.id
						})
					);
				});

				// >>>>>>>>>> Handling Leaving Room <<<<<<<<<<<<<

				socket.on('player_disconnected', payload => {
					console.log(payload.name + 'has left');
					dispatch(removePlayer(payload.id));
					dispatch(removeCaptain({ id: payload.id }));
				});

				// >>>>>>>>>> Handling Joining Team <<<<<<<<<<<<<

				socket.on('joined_team', payload => {
					dispatch(
						addTeam({
							id: payload.id,
							team: payload.team
						})
					);
					if (user.user_id === payload.id) {
						dispatch(setTeam(payload.team));
					}
				});

				// >>>>>>>>>>> Handling becoming Captain <<<<<<<<<

				socket.on('captain_set', payload => {
					dispatch(addCaptain({ id: payload.id }));
					if (user.user_id === payload.id) {
						dispatch(setCaptain());
					}
					console.log('kapitan: ' + payload.id);

					let player =
						players[
							findPlayerById(players, payload.id)
						];
					if (player.team === 1) {
						console.log('jola lojalna');
						dispatch(
							setCaptain_1({
								id: player.id,
								name: player.name
							})
						);
					} else if (player.team === 2) {
						dispatch(
							setCaptain_2({
								id: player.id,
								name: player.name
							})
						);
					}
				});

				// >>>>> handling session start <<<<<<<
				socket.on('session_started', payload => {
					if (payload && payload.board) {
						console.log(payload);
						dispatch(
							setBoard({ board: payload.board })
						);
						dispatch(setSession());
					}
				});
			}

			// >>>>>>>>>> Clearing listeners on update <<<<<<<<<<<<<

			return () => {
				if (socket) {
					socket.removeAllListeners();
				}
			};
		},
		[user.user_id, socket, players]
	);
};

export default useAddRoomListeners;
