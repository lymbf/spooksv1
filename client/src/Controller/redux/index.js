import { combineReducers } from 'redux';
import user from './reducers/user';
import players from './reducers/players';
import game from './reducers/game';

let combinedReducers = combineReducers({ user, players, game });

export { combinedReducers };
