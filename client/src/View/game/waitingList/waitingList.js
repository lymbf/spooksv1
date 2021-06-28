import React from 'react';
import './waitingList.css';
import {useSelector} from 'react-redux';

export default function WaitingList({ handleJoinTeam }) {

	let playerPool = useSelector(state=>state.players)
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
				{playerPool.map(player=>{
					console.log('cipencjuszeczka');
					if(!player.team){
						return <div key = {player.name}>{player.name}</div>
					}
				})}
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
