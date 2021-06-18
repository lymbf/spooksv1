import { useRef } from 'react';
import { gsap, TimelineLite } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

export default function useSection2Animation() {
	let animateBoard = pic => {
		gsap.set(pic, {
			x: -200,
			rotateY: -90,
			scale: 0
		});

		let tl = new TimelineLite({
			scrollTrigger: {
				trigger: '.home-main',
				start: 'bottom+=70% bottom',
				toggleActions: 'play none none reverse'
			}
		});

		tl
			// .to(pic, {
			// 	duration: 0.2,
			// 	rotateY: -70,
			// 	scale: 0.8,
			// 	x: -180,
			// 	autoAlpha: 1
			// })
			.to(pic, {
				duration: 0.4,
				rotateY: -40,
				autoAlpha: 1,
				scale: 1,
				x: 0
			});
	};

	let animateText = (header1, header2, text1, text2, header3) => {
		const splitedHeader1 = new SplitText(header1, {
			type: 'words, chars'
		}).chars;

		const splitedHeader2 = new SplitText(header2, {
			type: 'words, chars'
		}).chars;

		let tl = new TimelineLite({
			scrollTrigger: {
				trigger: '.home-main',
				start: 'bottom+=70% bottom',
				toggleActions: 'play none none reverse'
			}
		});

		tl
			.from([splitedHeader1, splitedHeader2], {
				x: -10,
				y: -10,
				autoAlpha: 0,
				stagger: 0.018,
				duration: 0.1,
				ease: 'power1.Out'
			})
			.from([text1, text2], {
				y: 10,
				autoAlpha: 0,
				duration: 0.15,
				ease: 'power1.In'
			})
			.from(header3, {
				autoAlpha: 0,
				x: -250,
				duration: 0.3,
				ease: 'back'
			});
	};

	return { animateBoard, animateText };
}
