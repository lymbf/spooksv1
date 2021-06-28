const { json } = require("express");

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

	socket.broadcast.to(room).emit('player_joined', {player: user})

	
};

let handleDisconnect = (user, room, app)=>{
	for (var i = 0; i < app.locals.rooms.length; i++){
		if (app.locals.rooms[i].room_name === room) {
			let j = app.locals.rooms[i].users.indexOf(user);
			app.locals.rooms[i].users.splice(j, 1);
		
		}
	}
}

module.exports = { joinRoom, handleDisconnect };
