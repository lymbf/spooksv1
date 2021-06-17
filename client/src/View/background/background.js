import React, { useState, useEffect, useRef } from 'react';
import './background.css';

import Stars from './stars';
import Mountains1 from './mountains1';
import Mountains2 from './mountains2';
import Mountains3 from './mountains3';
import Mountains4 from './mountains4';
import Mountains5 from './mountains5';
import FrontTrees from './frontTrees';
import BackTrees from './backTrees';
import Moon from './moon';
import Birds1 from './birds1';
import Birds2 from './birds2';

import useParallelAnimation from './UILogic/parallelAnimation';

export default function Background() {
	let [stars, setStars] = useState();
	let [mountains1, setMountains1] = useState();
	let [frontTrees, setFrontTrees] = useState();
	let [mountains2, setMountains2] = useState();
	let [backTrees, setBackTrees] = useState();
	let [mountains3, setMountains3] = useState();
	let [mountains4, setMountains4] = useState();
	let [mountains5, setMountains5] = useState();
	let [moon, setMoon] = useState();
	let [birds1, setBirds1] = useState();
	let [birds2, setBirds2] = useState();
	let rectRef = useRef();

	let { animate } = useParallelAnimation();
	useEffect(
		() => {
			if (stars) {
				animate(
					stars,
					mountains1,
					frontTrees,
					mountains2,
					backTrees,
					mountains3,
					mountains4,
					mountains5,
					moon,
					birds1,
					birds2,
					rectRef.current
				);
			}
		},
		[
			stars,
			mountains1,
			frontTrees,
			mountains2,
			backTrees,
			mountains3,
			mountains4,
			mountains5,
			moon,
			birds1,
			birds2
		]
	);
	return (
		<div className="background">
			<Stars setStars={setStars} />
			<Mountains1 setMountains1={setMountains1} />
			<FrontTrees setFrontTrees={setFrontTrees} />
			<Mountains2 setMountains2={setMountains2} />
			<BackTrees setBackTrees={setBackTrees} />
			<Mountains3 setMountains3={setMountains3} />
			<Mountains4 setMountains4={setMountains4} />
			<Mountains5 setMountains5={setMountains5} />
			<Moon setMoon={setMoon} />
			<Birds1 setBirds1={setBirds1} />
			<Birds2 setBirds2={setBirds2} />
			<div ref={rectRef} className="background-rect" />
		</div>
	);
}
