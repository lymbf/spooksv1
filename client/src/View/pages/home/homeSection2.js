import React, { useRef, useEffect } from 'react';
import './homeSection2.css';

import useSection2Animation from './UILogic/section2Animation';

export default function HomeSection2() {
	const boardRef = useRef();
	const headerRef1 = useRef();
	const headerRef2 = useRef();
	const textRef1 = useRef();
	const textRef2 = useRef();
	const headerRef3 = useRef();

	const scroll = useSection2Animation();

	useEffect(() => {
		scroll.animateBoard(boardRef.current);
		scroll.animateText(
			headerRef1.current,
			headerRef2.current,
			textRef1.current,
			textRef2.current,
			headerRef3.current
		);
	}, []);

	return (
		<div className="home-section-2">
			<div>
				<div className="section-2-text">
					<div>
						<div ref={headerRef1}>Captain:</div>
						<div ref={textRef1}>
							Pick a word to describe as many
							pictures of your team (red/blue) as
							possible
						</div>
					</div>
					<div>
						<div ref={headerRef2}>Team:</div>
						<div ref={textRef2}>
							Figure out the clue, guess all the
							matching pictures, avoid opponents
							fields!
						</div>
					</div>
					<div ref={headerRef3}>
						Be quicker then your rivals!
					</div>
				</div>
			</div>

			<div>
				<div className="board-svg-container">
					<div className="board-svg" ref={boardRef} />
				</div>
			</div>
		</div>
	);
}
