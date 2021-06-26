let SET_USER = 'SET_USER';

export default (state = { name: false }, action) => {
	switch (action.type) {
		case SET_USER:
			console.log('set user dispatched');
			return { ...state, name: action.name };
		default:
			return state;
	}
};

let setUser = name => {
	return {
		type: SET_USER,
		name: name
	};
};

export { setUser };
