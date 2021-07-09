import React from 'react';
import './picView.css';
import ReactDOM from 'react-dom';

export default function PicView({ onClick, url }) {
	return ReactDOM.createPortal(
		<div className="pic-view" onClick={onClick}>
			<img src={url} />
		</div>,
		document.getElementById('pic-view')
	);
}
