import React from 'react';
import './gameLink.css';

export default function GameLink() {
	return (
		<div className="game-link">
			<div>Link to the game:</div>
			<div>
				{window.location.href}
			</div>
		</div>
	);
}
