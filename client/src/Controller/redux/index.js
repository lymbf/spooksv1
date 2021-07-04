import { combineReducers } from 'redux';
import user from './reducers/user';
import players from './reducers/players';
import game from './reducers/game';
import socket from './reducers/socket';
import session from './reducers/session';

let combinedReducers = combineReducers({
	user,
	players,
	game,
	socket,
	session
});

export { combinedReducers };
