let SET_SESSION = 'session/setSession';
let END_SESSION = 'session/endSession';

export default (state = { session: false }, action) => {
	switch (action.type) {
		case SET_SESSION:
			return { ...state, session: true };
		case END_SESSION:
			return { ...state, session: false };
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

export { setSession, endSession };
