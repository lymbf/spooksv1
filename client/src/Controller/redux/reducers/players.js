let ADD_PLAYER = 'players/addPlayer';
let REMOVE_PLAYER = 'players/removePlayer';
let ADD_TEAM = 'players/addTeam';
let ADD_CAPTAIN = 'players/addCaptain';

let findPlayerById = (state, id) => {
	let i;
	for (var j = 0; j < state.length; j++) {
		if (state[j].id === id) {
			i = j;
			break;
		}
	}
	return i;
};

export default (state = [], action) => {
	let newST = [...state];
	switch (action.type) {
		case ADD_PLAYER:
			return [...state, action.payload];

		case REMOVE_PLAYER:
			let i = findPlayerById(state, action.payload);
			newST.splice(i, 1);
			return newST;
		case ADD_TEAM:
			let j = findPlayerById(state, action.payload.id);
			newST[j].team = action.payload.team;
			return newST;
		case ADD_CAPTAIN:
			let g = findPlayerById(state, action.payload.id);
			newST[g].captain = true;
			return newST;
		default:
			return state;
	}
};

let addPlayer = payload => {
	return {
		type: ADD_PLAYER,
		payload: {
			name: payload.name,
			id: payload.id,
			team: payload.team,
			captain: payload.captain
		}
	};
};

let removePlayer = payload => {
	return { type: REMOVE_PLAYER, payload: payload };
};

let addTeam = payload => {
	return {
		type: ADD_TEAM,
		payload: { id: payload.id, team: payload.team }
	};
};

let addCaptain = payload => {
	return {
		type: ADD_CAPTAIN,
		payload: { id: payload.id }
	};
};
export { addPlayer, removePlayer, addTeam, addCaptain };
