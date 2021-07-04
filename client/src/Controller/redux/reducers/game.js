let SET_GAME_ROOM = 'game/set_game_room';
let SET_CAPTAIN_1 = 'game/setCaptain1';
let SET_CAPTAIN_2 = 'game/setCaptain2';
let REMOVE_CAPTAIN = 'game/removeCaptain';

let game = (state = { gameRoom: false }, action) => {
	switch (action.type) {
		case SET_GAME_ROOM:
			return { ...state, gameRoom: action.payload };
		case SET_CAPTAIN_1:
			return {
				...state,
				captain_1: {
					id: action.payload.id,
					name: action.payload.name
				}
			};
		case SET_CAPTAIN_2:
			return {
				...state,
				captain_2: {
					id: action.payload.id,
					name: action.payload.name
				}
			};
		case REMOVE_CAPTAIN:
			if (
				state.captain_1 &&
				state.captain_1.id === action.payload.id
			) {
				return { ...state, captain_1: false };
			} else if (
				state.captain_2 &&
				state.captain_2.id === action.payload.id
			) {
				return { ...state, captain_2: false };
			} else {
				return state;
			}
		default:
			return state;
	}
};

export default game;

let setCaptain_1 = payload => {
	return {
		type: SET_CAPTAIN_1,
		payload: { id: payload.id, name: payload.name }
	};
};

let setCaptain_2 = payload => {
	return {
		type: SET_CAPTAIN_2,
		payload: { id: payload.id, name: payload.name }
	};
};

let removeCaptain = payload => {
	return {
		type: REMOVE_CAPTAIN,
		payload: { id: payload.id }
	};
};

let setGameRoom = payload => {
	return {
		type: SET_GAME_ROOM,
		payload: payload
	};
};

export { setGameRoom, setCaptain_1, setCaptain_2, removeCaptain };
