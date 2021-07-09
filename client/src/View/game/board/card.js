import React from 'react';
import './card.css';

import useCardController from './UILogic/cardController';
import PicView from './picView';

export default function Card({ url }) {
	let { picView, handleSearchClick, closeView } = useCardController();

	return (
		<div className="board-card">
			<div className="card-front">
				<img src={url} />
				<div className="board-card-utils">
					<div
						className="search-icon"
						onClick={handleSearchClick}
					/>
					{picView &&
						<PicView onClick={closeView} url={url} />}
					<div className="check-mark" />
				</div>
			</div>
		</div>
	);
}
