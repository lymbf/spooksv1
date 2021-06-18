import React from 'react';
import './navbar.css';

import { links } from './UIModel/navLinksModel';
import useNavbarController from './UILogic/navbarController';
import Link from './link';

export default function Navbar() {
	let { dispatch, state } = useNavbarController();

	return (
		<div className="navbar">
			<ul>
				{state &&
					state.map(item => {
						return (
							<Link
								key={item.name}
								title={item.name}
								addedClass={item.class}
								updateClass={dispatch}
							/>
						);
					})}
			</ul>
		</div>
	);
}
