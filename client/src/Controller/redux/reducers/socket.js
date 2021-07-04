let SET_SOCKET = 'socket/setSocket';

export default (state = false, action) => {
	switch (action.type) {
		case SET_SOCKET:
			return action.payload;
		default:
			return state;
	}
};

let setSocket = payload => {
	return {
		type: SET_SOCKET,
		payload: payload
	};
};

export { setSocket };
