import React from 'react';
import './waitingList.css';

export default function WaitingList({ handleJoinTeam }) {
	return (
		<div className="waiting-list-container">
			<div
				className="join-team"
				onClick={() => {
					handleJoinTeam(1);
				}}
			>
				Join Team 1
			</div>
			<div className="waiting-list">
				<div>Waiting list:</div>
				<div>Jacek,</div>
				<div>Adam,</div>
				<div>Pawel</div>
				<div>Jacek,</div>
				<div>Adam,</div>
				<div>Pawel</div>
				<div>Jacek,</div>
				<div>Adam,</div>
			</div>
			<div
				className="join-team"
				onClick={() => {
					handleJoinTeam(2);
				}}
			>
				Join Team 2
			</div>
		</div>
	);
}
