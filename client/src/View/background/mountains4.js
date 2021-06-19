import React, { useRef, useEffect } from 'react';

export default function Mountains4({ setMountains4 }) {
	let mountains4Ref = useRef();
	useEffect(() => {
		setMountains4(mountains4Ref.current);
	}, []);
	return (
		<svg
			ref={mountains4Ref}
			className="mountains4"
			viewBox="0 0 1471.99 714.1"
		>
			<defs>
				<linearGradient
					id="linear-gradient"
					x1="640.35"
					y1="-28.09"
					x2="707.08"
					y2="399.46"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#0b0b0b" />
					<stop offset="0.38" stopColor="#1c1c1c" />
					<stop offset="0.98" stopColor="#333" />
				</linearGradient>
			</defs>
			<g id="Layer_2" data-name="Layer 2">
				<g id="Layer_1-2" data-name="Layer 1">
					<path
						id="mountain_5"
						data-name="mountain 5"
						d="M0,457.18S397.5,204.84,433.25,198.65s180.88-14.43,212.42-39.17S710.87,35.77,742.42,9s61,14.43,77.82,20.61S872.81,6.9,893.85,23.4s117.77,142.26,193.49,144.32S1459.6,376,1459.6,376L1472,714.1H0Z"
						fill="url(#linear-gradient)"
					/>
				</g>
			</g>
		</svg>
	);
}
