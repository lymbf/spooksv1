const nodemon = require('nodemon');
const str = require('randomstring');

module.exports = (req, res, next) => {
	let roomStr = str.generate(10);
	while (
		req.app.locals.rooms.filter(room => {
			room.room_name === room.str;
		}).length > 0
	) {
		roomStr = str.generate(10);
	}
	req.app.locals.rooms.push({ room_name: roomStr, users: [] });
	req.roomStr = roomStr;
	next();
};
