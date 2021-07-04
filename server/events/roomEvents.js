let findUserIndex = (userId, users) => {
	for (var j = 0; j < users.length; j++) {
		if (users[j].id === userId) {
			return j;
		}
	}
};

let updateRoomUsers = (user, room, app, id) => {
	for (var i = 0; i < app.locals.rooms.length; i++) {
		if (app.locals.rooms[i].room_name === room) {
			app.locals.rooms[i].users.push({ name: user, id: id });
		}
	}
};

let joinRoom = (socket, user, room, app) => {
	socket.join(room);
	console.log(user + ' joined: ' + room);

	updateRoomUsers(user, room, app, socket.id);
	console.log('rooms: ', app.locals.rooms);

	socket.broadcast
		.to(room)
		.emit('player_joined', { player: user, id: socket.id });
};

let handleDisconnect = (user, room, app, socket) => {
	for (var i = 0; i < app.locals.rooms.length; i++) {
		if (app.locals.rooms[i].room_name === room) {
			let j = findUserIndex(socket.id, app.locals.rooms[i].users);
			app.locals.rooms[i].users.splice(j, 1);
			if (!app.locals.rooms[i].users.length) {
				app.locals.rooms.splice(i, 1);
			}
		}
	}
	socket.broadcast.to(room).emit('player_disconnected', {
		name: user,
		id: socket.id
	});
};

module.exports = { joinRoom, handleDisconnect };
