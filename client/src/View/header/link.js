import React, { useRef, useEffect } from 'react';
import { Link as Href } from 'react-router-dom';

import useLinkHoverAnimation from './UILogic/linkHoverAnimation';

export default function Link({ title, addedClass, updateClass }) {
	const strip = useRef();
	let { tlIn, tlOut } = useLinkHoverAnimation();

	return (
		<Href to={`/${title}`}>
			<li
				className={addedClass}
				onClick={() => {
					updateClass({
						type: 'UPDATE_CLASS',
						name: title
					});
				}}
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
				<div className="nav-strip-container ">
					<div ref={strip} className="nav-strip" />
					{addedClass === 'active' &&
						<div className="nav-strip-active" />}
				</div>
			</li>
		</Href>
	);
}
