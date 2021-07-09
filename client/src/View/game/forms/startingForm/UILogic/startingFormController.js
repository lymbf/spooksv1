import { useSelector, useDispatch } from 'react-redux';

import { setSession } from '../../../../../Controller/redux/reducers/session';

let checkTeam = (team, players) => {
	let isReady = false;
	let j = 0;
	for (var i = 0; i < players.length; i++) {
		if (players[i].team === team) {
			j++;
		}
	}

	isReady = j >= 2 ? true : false;
	return isReady;
};

export default function useStartingFormController() {
	let captain_1 = useSelector(state => state.game.captain_1);
	let captain_2 = useSelector(state => state.game.captain_2);
	let players = useSelector(state => state.players);
	let socket = useSelector(state => state.socket);

	let startEnabled = () => {
		if (
			captain_1 &&
			captain_2 &&
			checkTeam(1, players) &&
			checkTeam(2, players)
		) {
			return true;
		} else {
			return false;
		}
	};

	let startGame = e => {
		e.preventDefault();
		socket.emit('start_session');
	};

	return { startGame, startEnabled };
}
