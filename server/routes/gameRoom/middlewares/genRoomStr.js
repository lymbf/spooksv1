const str = require('randomstring');

module.exports = (req, res, next) => {
	let roomStr = str.generate(10);
	while (req.app.locals.rooms.includes(roomStr)) {
		roomStr = str.generate(10);
	}
	req.app.locals.rooms.push(roomStr);
	req.roomStr = roomStr;
	next();
};
