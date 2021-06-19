import React, { useRef, useEffect } from 'react';

export default function Mountain2({ setMountains2 }) {
	let mountains2Ref = useRef();
	useEffect(() => {
		setMountains2(mountains2Ref.current);
	}, []);
	return (
		<svg
			ref={mountains2Ref}
			className="mountains2"
			viewBox="0 0 1919.14 520.33"
		>
			<defs>
				<linearGradient
					id="linear-gradient"
					x1="955.87"
					y1="133.28"
					x2="963.07"
					y2="449.95"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#1f2021" />
					<stop
						offset="0.32"
						stopColor="#2c2f30"
						stopOpacity="0.91"
					/>
					<stop
						offset="0.74"
						stopColor="#52585a"
						stopOpacity="0.64"
					/>
					<stop
						offset="0.79"
						stopColor="#585e60"
						stopOpacity="0.6"
					/>
				</linearGradient>
			</defs>
			<g id="Layer_2" data-name="Layer 2">
				<g id="Layer_1-2" data-name="Layer 1">
					<path
						id="mountain_2"
						data-name="mountain 2"
						d="M0,143S120.93,44.21,322.84,72,461.65,159.52,632,143,802.36,36,869.66,72c48,25.67,143.67,66.66,187.18,73.88,96.05,16,118.52-117.17,256.24-142.68,92.7-17.18,94.27,40.95,263.24,45,55.07,1.32,100.23,34.49,153.06,24.66,27-5,27.55-16.78,53-24.66C1833.16,32.52,1884,52.56,1919.14,72q-.93,223.47-1.87,446.95L0,520.33Z"
						fill="url(#linear-gradient)"
					/>
				</g>
			</g>
		</svg>
	);
}
