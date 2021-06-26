import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './game.css';

// >>> UI Imports <<<<

import GameMain from './gameMain';
import JoinForm from './forms/joinForm';

export default function Game() {
	let user = useSelector(state => state.user.name);

	return user ? <GameMain /> : <JoinForm />;
}
