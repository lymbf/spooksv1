import React from 'react';
import './teamModal.css';
import { useSelector } from 'react-redux';

import useGameRoomEvents from '../../../Controller/events/gameRoomEvents';

export default function TeamModal({ header, teamClass, id }) {
	let playerPool = useSelector(state => state.players);
	let user = useSelector(state => state.user);
	let captain_1 = useSelector(state => state.game.captain_1);
	let captain_2 = useSelector(state => state.game.captain_2);
	let score = useSelector(state => state.game.score);
	let captain = id === 1 ? captain_1 : captain_2;
	score = id === 1 ? score[0] : score[1];

	let { becomeCaptain } = useGameRoomEvents();

	return (
		<div className={`team-modal ${teamClass}`}>
			<h3>
				{header}
			</h3>
			<div className="team-container">
				<div>
					<div>Captain:</div>
					<div>
						{captain &&
							<div>
								{captain.name}
							</div>}
					</div>
				</div>
				<div>
					<div>Team:</div>
					<div>
						{playerPool.map(player => {
							if (
								player.team === id &&
								!player.captain
							) {
								return (
									<div key={player.name}>
										{player.name}
									</div>
								);
							}
						})}
					</div>
				</div>
				{!captain &&
					user.team === id &&
					<div
						className="captain-button"
						onClick={becomeCaptain}
					>
						Become Captain
					</div>}
			</div>
			<div>
				<div>Score:</div>
				<div>
					{score}
				</div>
			</div>
		</div>
	);
}
