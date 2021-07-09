import React from 'react';
import './board.css';
import { useSelector } from 'react-redux';

import Clue from './clue';
import ClueForm from './clueForm';
import Card from './card';

export default function Board() {
	let board = useSelector(state => state.session.board);
	return (
		<div className="game-board">
			<div className="game-board-cards">
				{board &&
					board.map(card => {
						return (
							<Card
								team={card.team}
								url={card.url}
							/>
						);
					})}
			</div>
			<ClueForm />
		</div>
	);
}
