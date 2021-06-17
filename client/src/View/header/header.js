import React from 'react';
import './header.css';

import Navbar from './navbar';
import Logo from './logo';

export default function Header() {
	return (
		<div className="header">
			<Logo />
			<Navbar />
		</div>
	);
}
