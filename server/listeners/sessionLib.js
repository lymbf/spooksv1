let setupBoard = () => {
	// board_cart: { url: '', team: 0, revealed: false }
	let img = 'https://i.ibb.co/HrDS1gj/fantasy-3077928-1280.jpg';
	let board = new Array(30);

	for (var h = 0; h < board.length; h++) {
		board[h] = { url: img, revealed: false };
	}

	let setTeam = i => {
		let r = Math.floor(Math.random() * 30);
		if (!board[r].team) {
			board[r].team = i;
		} else {
			setTeam(i);
		}
	};
	let a = Math.floor(Math.random());
	let b = 1 - a;

	for (var j = 0; j < 8 - a; j++) {
		setTeam(1);
	}
	for (var g = 0; g < 8 - b; g++) {
		setTeam(2);
	}

	for (var z = 0; z < 30; z++) {
		if (!board[z].team) {
			board[z].team = 0;
		}
	}

	return { score_limit: [8 - a, 8 - b], board };
};

module.exports = { setupBoard: setupBoard };
