let { setupBoard } = require('./sessionLib');

module.exports = (socket, app, room) => {
	let findRoomIndex = room => {
		for (var i = 0; i < app.locals.rooms.length; i++) {
			if (app.locals.rooms[i].room_name === room) {
				return i;
			}
		}
	};

	socket.on('start_session', () => {
		let i = findRoomIndex(room);

		let { score_limit, board } = setupBoard();

		app.locals.rooms[i].session = {
			session: true,
			board: board,
			score_limit: score_limit,
			score: [0, 0]
		};

		socket.to(room).emit('session_started', { board: board });
		socket.emit('session_started', { board: board });
	});
};
