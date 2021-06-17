import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useHomeScrollAnimation() {
	let animateText = text => {
		gsap.to(text, {
			scrollTrigger: {
				trigger: '.home-main',
				start: 'center+=250 center',
				toggleActions: 'play none none reverse'
			},
			duration: 0.3,
			y: -150,
			autoAlpha: 0
		});
	};

	let animatePic1 = pic => {
		gsap.to(pic, {
			scrollTrigger: {
				trigger: '.home-main',
				start: 'center+=550 center',
				toggleActions: 'play none none reverse'
			},
			duration: 0.5,
			// y: -pic.offsetTop - 50,
			// x:
			// 	-(
			// 		window.innerWidth / 2 -
			// 		(window.innerWidth - pic.offsetLeft)
			// 	) -
			// 	pic.offsetWidth / 2,
			autoAlpha: 0,
			// scale: 0,
			ease: 'power2.in'
		});
	};

	let animatePic2 = pic => {
		gsap.to(pic, {
			scrollTrigger: {
				trigger: '.home-main',
				start: 'center+=550 center',
				toggleActions: 'play none none reverse'
			},
			duration: 0.5,
			// y: -pic.offsetTop + 20,
			// x:
			// 	window.innerWidth / 2 -
			// 	(window.innerWidth -
			// 		(window.innerWidth -
			// 			pic.offsetLeft -
			// 			pic.offsetWidth)) +
			// 	pic.offsetWidth / 2,
			autoAlpha: 0,
			// scale: 0,
			ease: 'power2.in'
		});
	};

	return { animateText, animatePic1, animatePic2 };
}
