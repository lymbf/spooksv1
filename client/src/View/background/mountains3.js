import React, { useRef, useEffect } from 'react';

export default function Mountains3({ setMountains3 }) {
	let mountains3Ref = useRef();
	useEffect(() => {
		setMountains3(mountains3Ref.current);
	}, []);
	return (
		<svg
			ref={mountains3Ref}
			className="mountains3"
			viewBox="0 0 1334.38 642.47"
		>
			<defs>
				<linearGradient
					id="linear-gradient"
					x1="570.72"
					y1="24.32"
					x2="630.53"
					y2="407.57"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#0b0b0b" />
					<stop offset="0.95" stopColor="#222" />
					<stop offset="1" stopColor="#232323" />
				</linearGradient>
			</defs>
			<g id="Layer_2" data-name="Layer 2">
				<g id="Layer_1-2" data-name="Layer 1">
					<path
						id="mountain_3"
						data-name="mountain 3"
						d="M1334.38,642.47C1024.44,436.09,873.73,111.05,847.51,88.36,818.32,63.1,812.07,6.4,791.22.22S737,121.86,684.89,88.36s-35.44-71.65-75.06-42.78S605.66,64.13,532.69,161C470.71,243.35,107.85,306.33,0,323.42V642.47Z"
						fill="url(#linear-gradient)"
					/>
				</g>
			</g>
		</svg>
	);
}
