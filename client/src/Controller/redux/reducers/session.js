let SET_SESSION = 'session/setSession';
let END_SESSION = 'session/endSession';
let SET_BOARD = 'session/setBoard';

export default (state = { session: false, board: false }, action) => {
	switch (action.type) {
		case SET_SESSION:
			return { ...state, session: true };
		case END_SESSION:
			return { ...state, session: false };
		case SET_BOARD:
			return { ...state, board: action.board };
		default:
			return state;
	}
};

let setSession = () => {
	return {
		type: SET_SESSION
	};
};

let endSession = () => {
	return {
		type: END_SESSION
	};
};

let setBoard = payload => {
	return {
		type: SET_BOARD,
		board: payload.board
	};
};

export { setSession, endSession, setBoard };
