import React, { useRef } from 'react';

import useLinkHoverAnimation from './UILogic/linkHoverAnimation';

export default function Link({ title }) {
	const strip = useRef();
	let { tlIn, tlOut } = useLinkHoverAnimation();

	return (
		<li
			onMouseEnter={() => {
				tlIn(strip.current);
			}}
			onMouseLeave={() => {
				tlOut(strip.current);
			}}
		>
			<div>
				{title}
			</div>
			<div className="nav-strip-container">
				<div ref={strip} className="nav-strip" />
			</div>
		</li>
	);
}
