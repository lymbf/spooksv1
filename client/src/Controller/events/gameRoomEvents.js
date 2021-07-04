import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function useGameRoomEvents() {
	let socket = useSelector(state => state.socket);
	let user = useSelector(state => state.user);
	let [userId, setUserId] = useState();

	useEffect(
		() => {
			setUserId(user.user_id);
		},
		[user]
	);

	let joinTeam = team => {
		socket.emit('join_team', team);
	};

	let becomeCaptain = () => {
		socket.emit('set_captain', userId);
	};

	return { joinTeam, becomeCaptain };
}
