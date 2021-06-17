import React from 'react';
import './navbar.css';

import { links } from './UIModel/navLinksModel';
import Link from './link';

export default function Navbar() {
	return (
		<div className="navbar">
			<ul>
				{links.map((link, i) => {
					return <Link key={i} title={link} />;
				})}
			</ul>
		</div>
	);
}
