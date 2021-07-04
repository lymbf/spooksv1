import React from 'react';
import './waitingList.css';
import { useSelector } from 'react-redux';

import useGameRoomEvents from '../../../Controller/events/gameRoomEvents';

export default function WaitingList() {
	let playerPool = useSelector(state => state.players);
	let user = useSelector(state => state.user);

	let { joinTeam } = useGameRoomEvents();

	return (
		<div className="waiting-list-container">
			{!user.team &&
				<div
					className="join-team"
					onClick={() => {
						joinTeam(1);
					}}
				>
					Join Team 1
				</div>}
			<div className="waiting-list">
				<div>Waiting list:</div>
				{playerPool.map(player => {
					if (!player.team) {
						return (
							<div key={player.name}>
								{player.name}
							</div>
						);
					}
				})}
			</div>
			{!user.team &&
				<div
					className="join-team"
					onClick={() => {
						joinTeam(2);
					}}
				>
					Join Team 2
				</div>}
		</div>
	);
}
