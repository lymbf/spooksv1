import React from 'react';
import { useSelector } from 'react-redux';

// >>>> UI Imports <<<<

import GameLink from './gameLink';
import TeamModal from './Team/teamModal';
import Board from './board/board';
import WaitingList from './waitingList/waitingList';
import StartingForm from './startingForm/startingForm';

// >>>> gameController / INIT <<<<

import useGameInit from '../../Controller/gameInit';

export default function GameMain() {
	let session = useSelector(state => state.session);
	useGameInit();
	return (
		<div className="game">
			<GameLink />
			<div className="game-container">
				<TeamModal
					header="Team 1"
					teamClass="red-team"
					id={1}
				/>
				{session.session ? <Board /> : <StartingForm />}

				<TeamModal
					header="Team 2"
					teamClass="blue-team"
					id={2}
				/>
			</div>
			<WaitingList />
		</div>
	);
}
