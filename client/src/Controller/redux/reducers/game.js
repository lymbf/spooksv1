let SET_GAME_ROOM = 'game/set_game_room';

let game = (state = { gameRoom: false }, action) => {
	switch (action.type) {
		case SET_GAME_ROOM:
			return { ...state, gameRoom: action.payload };
		default:
			return state;
	}
};

export default game;

let setGameRoom = payload => {
	return {
		type: SET_GAME_ROOM,
		payload: payload
	};
};

export { setGameRoom };
