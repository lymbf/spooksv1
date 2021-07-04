let { joinRoom } = require('./events/roomEvents');

getInitState = (app, room) => {
	for (var i = 0; i < app.locals.rooms.length; i++) {
		if (app.locals.rooms[i].room_name === room) {
			return app.locals.rooms[i];
		}
	}
	return false;
};

let handleInitConnection = (app, socket, room, user) => {
	try {
		joinRoom(socket, user, room, app);
	} catch (err) {
		console.log(err);
	}
	socket.emit('init_state', getInitState(app, room));
};

module.exports = { handleInitConnection };
