let updateRoomUsers = (user, room, app) => {
	for (var i = 0; i < app.locals.rooms.length; i++) {
		if (app.locals.rooms[i].room_name === room) {
			app.locals.rooms[i].users.push(user);
		}
	}
};

let joinRoom = (socket, user, room, app) => {
	socket.join(room);
	console.log(user + ' joined: ' + room);
	updateRoomUsers(user, room, app);
	console.log('rooms: ', app.locals.rooms);
};

module.exports = { joinRoom };
