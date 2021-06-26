const express = require('express');
const app = express();
const cors = require('cors');
let io = require('socket.io');

// >>>>Defs<<<<
app.locals.rooms = [];
// >>>>MiDDLEWARES<<<<
app.use(express.json());
app.use(
	cors({
		credentials: true
	})
);
// >>>>ROUTES<<<<

const gameRoomRouter = require('./routes/gameRoom/gameRoomRouter');

app.use('/gameroom', gameRoomRouter);

let server = app.listen('5000', () => {
	console.log('server up n runnin');
});

// >>>>> IO SERVER <<<<<
let { joinRoom } = require('./events/roomEvents');

const ioServer = io(server, {
	cors: {
		origin: '*',
		method: '[POST, GET]'
	}
});

ioServer.on('connect', socket => {
	console.log('user connected to socket: ' + socket.id);
	let room = socket.handshake.query.room;
	let user = socket.handshake.query.user;
	joinRoom(socket, user, room, app);
});
