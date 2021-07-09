module.exports = (socket, app, room) => {
	let findRoomIndex = room => {
		for (var i = 0; i < app.locals.rooms.length; i++) {
			if (app.locals.rooms[i].room_name === room) {
				return i;
			}
		}
	};

	let findUserIndex = (userId, users) => {
		for (var j = 0; j < users.length; j++) {
			if (users[j].id === userId) {
				return j;
			}
		}
	};

	socket.on('join_team', payload => {
		let i = findRoomIndex(room);
		let j = findUserIndex(socket.id, app.locals.rooms[i].users);
		app.locals.rooms[i].users[j].team = payload;

		console.log('player: ' + socket.id + 'joined team: ' + payload);

		socket
			.to(room)
			.emit('joined_team', { id: socket.id, team: payload });
		socket.emit('joined_team', { id: socket.id, team: payload });
	});

	socket.on('set_captain', payload => {
		let i = findRoomIndex(room);
		let j = findUserIndex(payload, app.locals.rooms[i].users);
		app.locals.rooms[i].users[j].captain = true;

		console.log('player: ' + payload + ' became captain');
		socket.to(room).emit('captain_set', { id: payload });
		socket.emit('captain_set', { id: payload });
	});

	socket.on('start_session', () => {
		let i = findRoomIndex(room);
		app.locals.rooms[i].session = { session: true };
		socket.to(room).emit('session_started');
		socket.emit('session_started');
	});
};
