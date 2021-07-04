let SET_USER = 'user/setName';
let SET_TEAM = 'user/setTeam';
let SET_CAPTAIN = 'user/setCaptain';
let SET_USER_ID = '/user/setId';

export default (
	state = { name: false, user_id: false, captain: false, team: false },
	action
) => {
	switch (action.type) {
		case SET_USER:
			console.log('set user dispatched');
			return { ...state, name: action.name };
		case SET_TEAM:
			return { ...state, team: action.team };
		case SET_CAPTAIN:
			return { ...state, captain: true };
		case SET_USER_ID:
			return { ...state, user_id: action.user_id };
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

let setUserId = id => {
	return {
		type: SET_USER_ID,
		user_id: id
	};
};

let setTeam = team => {
	return {
		type: SET_TEAM,
		team: team
	};
};

let setCaptain = () => {
	return {
		type: SET_CAPTAIN
	};
};
export { setUser, setTeam, setCaptain, setUserId };
