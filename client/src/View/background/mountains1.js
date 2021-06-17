import React, { useRef, useEffect } from 'react';

export default function Mountains1({ setMountains1 }) {
	let mountains1Ref = useRef();
	useEffect(() => {
		setMountains1(mountains1Ref.current);
	}, []);
	return (
		<svg
			ref={mountains1Ref}
			className="mountains1"
			viewBox="0 0 1919.42 427.75"
		>
			<g id="Layer_2" data-name="Layer 2">
				<g id="Layer_1-2" data-name="Layer 1">
					<path
						id="mountain_1"
						data-name="mountain 1"
						d="M0,209.2S315.51,56.62,405.06,79.3,692.45,221.57,754.93,209.2s75-68,112.45-45.36,46.86,67.77,82.78,46.25S1279.73-27.91,1406.76,3,1621.27,165.9,1692.07,139.1c106.57-40.34,165.67-101.61,208.26-74.23,27.86,17.91,17,66.46,16.94,355.13v6.34L0,427.75Z"
						fill="#191b1c"
					/>
				</g>
			</g>
		</svg>
	);
}
