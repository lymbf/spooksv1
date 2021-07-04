import { useHistory } from 'react-router-dom';

let useRedirect = () => {
	let history = useHistory();

	const generateGameRoom = async () => {
		//get uniq game room from server

		let getRoom = async () => {
			try {
				let res = await fetch(
					'http://localhost:5000/gameroom',
					{
						method: 'GET',
						headers: {
							'Content-Type': 'application/json'
						}
					}
				);
				res = await res.json();
				if (res.error) {
					throw new Error(res.message);
				}
				return res.roomStr;
			} catch (err) {
				console.log(err);
			}
		};
		let gameStr = await getRoom();
		console.log(gameStr);

		// > redirect to url/game/<room_number>

		history.push(`/game?id=${gameStr}`);
	};
	return { generateGameRoom };
};

export default useRedirect;
