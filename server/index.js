const express = require('express');
const app = express();
const cors = require('cors');

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

app.listen('5000', () => {
	console.log('server up n runnin');
});
