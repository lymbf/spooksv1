const router = require('express').Router();

//Middleware imports

let genRoomStr = require('./middlewares/genRoomStr');

router.use('/', genRoomStr);
router.get('/', (req, res, next) => {
	res.status(200).send({ roomStr: req.roomStr });
	console.log(req.app.locals.rooms);
});

module.exports = router;
