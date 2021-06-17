import React from 'react';
import './homeMain.css';

import Home from './home';
import HomeSection2 from './homeSection2';

export default function HomeMain() {
	return (
		<div className="homeMain">
			<Home />
			<HomeSection2 />
			<div className="scroll-circle" />
			<div className="scroll-circle-text">Scroll Me</div>
		</div>
	);
}
