import React from 'react';
import './game.css';

import GameLink from './gameLink';
import TeamModal from './Team/teamModal';
import Board from './board/board';

export default function Game() {
	return (
		<div className="game">
			<GameLink />
			<div className="game-container">
				<TeamModal />
				<Board />
				<TeamModal />
			</div>
		</div>
	);
}
