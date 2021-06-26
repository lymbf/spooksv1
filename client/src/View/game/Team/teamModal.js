import React from 'react';
import './teamModal.css';

export default function TeamModal({ header, teamClass }) {
	return (
		<div className={`team-modal ${teamClass}`}>
			<h3>
				{header}
			</h3>
			<div className="team-container">
				<div>
					<div>Captain:</div>
					<div>asdf</div>
				</div>
				<div>
					<div>Team:</div>
					<div>asdf</div>
				</div>
				<div className="captain-button">Become Captain</div>
			</div>
			<div>
				<div>Score:</div>
				<div>3</div>
			</div>
		</div>
	);
}
