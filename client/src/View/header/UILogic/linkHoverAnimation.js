import { gsap } from 'gsap';

export default function useLinkHoverAnimation() {
	const tlIn = el => {
		gsap.set(el, {
			x: 0
		});
		gsap.to(el, {
			duration: 0.3,
			x: '100%'
		});
	};

	const tlOut = el => {
		gsap.to(el, {
			duration: 0.3,
			x: '200%'
		});
	};

	return { tlIn, tlOut };
}
