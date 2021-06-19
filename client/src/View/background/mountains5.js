import React, { useRef, useEffect } from 'react';

export default function Mountains5({ setMountains5 }) {
	let mountains5Ref = useRef();
	useEffect(() => {
		setMountains5(mountains5Ref.current);
	}, []);
	return (
		<svg
			ref={mountains5Ref}
			className="mountains5"
			viewBox="0 0 650.88 539.36"
		>
			<defs>
				<linearGradient
					id="linear-gradient"
					x1="294.77"
					y1="-21.86"
					x2="334.38"
					y2="450.97"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#0b0b0b" />
					<stop offset="0.14" stopColor="#191919" />
					<stop offset="0.41" stopColor="#3c3c3c" />
					<stop offset="0.43" stopColor="#3e3e3e" />
				</linearGradient>
			</defs>
			<g id="Layer_2" data-name="Layer 2">
				<g id="Layer_1-2" data-name="Layer 1">
					<path
						id="mountain_4"
						data-name="mountain 4"
						d="M650.88,539.36,641.11,32.43S574.39,20.82,534.78,28s-193.9,17.53-233.51-13.4-50-6.18-87.57,13.4S86.52,22.88,57.33,32.43C42.61,37.24,19.39,55.52,0,72.45V539.36Z"
						fill="url(#linear-gradient)"
					/>
				</g>
			</g>
		</svg>
	);
}
