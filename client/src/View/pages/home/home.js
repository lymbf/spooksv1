import React, { useRef, useEffect } from 'react';
import './home.css';

import useHomePicAnimation from './UILogic/homePicAnimation';
import useHomeScrollAnimation from './UILogic/homeScrollAnimation';

export default function Home() {
	let pic1Ref = useRef();
	let pic2Ref = useRef();
	let textRef = useRef();
	useHomePicAnimation(pic1Ref, pic2Ref, textRef);

	// Obtaining object with scroll animations
	let scroll = useHomeScrollAnimation();

	//Initialaizing scroll triggered animations after component mounted
	useEffect(() => {
		scroll.animateText(textRef.current);
		scroll.animatePic1(pic1Ref.current);
		scroll.animatePic2(pic2Ref.current);
	});

	return (
		<div className="home">
			<div className="home-text" ref={textRef}>
				<h1>Welcome to Spooks</h1>
				<p>
					Ready for the ultimate enterntainement? Let me
					walk you through..
				</p>
			</div>
			<div className="home-pic-1" ref={pic1Ref} />
			<div className="home-pic-2" ref={pic2Ref} />
		</div>
	);
}
