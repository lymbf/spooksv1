import React, { useRef, useEffect } from 'react';

export default function Birds2({ setBirds2 }) {
	let birds2Ref = useRef();
	useEffect(() => {
		setBirds2(birds2Ref.current);
	}, []);
	return (
		<svg ref={birds2Ref} className="birds2" viewBox="0 0 68.44 36.83">
			<g id="Layer_2" data-name="Layer 2">
				<g id="Layer_1-2" data-name="Layer 1">
					<g id="birds2">
						<path
							d="M51.86,33.61l-.21-.67A1.33,1.33,0,0,0,51.86,33.61Z"
							fill="#1f2223"
						/>
						<path
							d="M68.42,36.72A24.73,24.73,0,0,0,63.93,30c-1.73-1.84-7.41-1.1-10.42-.77a2,2,0,0,0-2.42-.89c-1-2.66-2.61-9.8-4.05-10.95-1.75-1.41-6,5.76-6,5.76,6.87-5.27,4.78-1.15,6.44.22,1.38,1.15,3.5,7.45,4.17,9.53,0-.52.23-1.28,1.56-2,2.35-1.32,7.21.48,9.14.9S68.68,37.64,68.42,36.72Z"
							fill="#1f2223"
						/>
						<path
							d="M15.89,22.82l-.62-.34A1.38,1.38,0,0,0,15.89,22.82Z"
							fill="#1f2223"
						/>
						<path
							d="M30,13.73A25.33,25.33,0,0,0,22.09,12c-2.52-.14-6.1,4.28-8,6.58a1.82,1.82,0,0,0-1.43.1,1.89,1.89,0,0,0-.94.91c-2.59-1.21-8.74-5.28-10.59-5.13-2.25.19-.29,8.27-.29,8.27,1.26-8.51,2.64-4.11,4.8-4.25,1.8-.12,7.74,3,9.68,4-.39-.36-.73-1.08-.29-2.52.77-2.57,5.54-4.6,7.23-5.62S30.84,14.22,30,13.73Z"
							fill="#1f2223"
						/>
						<path
							d="M40.71,3.69l-.22-.15A.46.46,0,0,0,40.71,3.69Z"
							fill="#1f2223"
						/>
						<path
							d="M48.47,2A11.88,11.88,0,0,0,45.25.82c-1.09-.24-3.41.86-4.65,1.42a1.2,1.2,0,0,0-.66-.08,1.26,1.26,0,0,0-.56.22c-1-.57-3-2.28-3.84-2.38-1-.11-1.5,2.53-1.5,2.53,2-2.53,1.85-1.07,2.83-.95a15,15,0,0,1,3.62,2c-.11-.14-.14-.39.29-.8.77-.73,3.21-1,4.13-1.19S48.75,2.16,48.47,2Z"
							fill="#1f2223"
						/>
					</g>
				</g>
			</g>
		</svg>
	);
}
