import React from 'react';

// >>>> UI Imports <<<<

import GameLink from './gameLink';
import TeamModal from './Team/teamModal';
import Board from './board/board';
import WaitingList from './waitingList/waitingList';

// >>>> gameController / INIT <<<<

import useGameInit from '../../Controller/gameInit';

// >>>> Event imports <<<<<

import useJoinTeam from '../../Controller/events/joinTeam';

export default function GameMain() {
	useGameInit();
	let { handleJoinTeam } = useJoinTeam();
	return (
		<div className="game">
			<GameLink />
			<div className="game-container">
				<TeamModal header="Team 1" teamClass="red-team" />
				<Board />
				<TeamModal header="Team 2" teamClass="blue-team" />
			</div>
			<WaitingList handleJoinTeam={handleJoinTeam} />
		</div>
	);
}
