import { TimelineLite } from 'gsap';

export default function useParallelAnimation() {
	let animate = (
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
		rect
	) => {
		let moonY =
			window.innerHeight - (mountains4.height.animVal.value + 60);

		let tlStars = new TimelineLite({ repeat: -1 });
		tlStars
			.to(stars, {
				duration: 1,
				autoAlpha: 0.2
			})
			.to(stars, {
				autoAlpha: 1,
				duration: 1
			});

		let settings = {
			scrollTrigger: {
				trigger: '.background',
				start: 'top top',
				end: '+=500',
				toggleActions: 'play none none reverse',
				scrub: 1
			}
		};
		let mountains1Tl = new TimelineLite(settings);
		let frontTreesTl = new TimelineLite(settings);
		let mountains2Tl = new TimelineLite(settings);
		let backTreesTl = new TimelineLite(settings);
		let mountains3Tl = new TimelineLite(settings);
		let mountains4Tl = new TimelineLite(settings);
		let mountains5Tl = new TimelineLite(settings);
		let birds2Tl = new TimelineLite(settings);
		let mooonTl = new TimelineLite(settings);
		let rectTl = new TimelineLite(settings);

		mountains1Tl.to(mountains1, { y: -190 });
		mooonTl.to(moon, { y: moonY - 100 });
		frontTreesTl.to(frontTrees, { y: -100 });
		mountains2Tl.to(mountains2, { y: -140 });
		backTreesTl.to(backTrees, { y: -90 });
		mountains3Tl.to(mountains3, { y: -60 });
		mountains4Tl.to(mountains4, { y: -60 });
		mountains5Tl.to(mountains5, { y: -30 });
		birds2Tl.to(birds1, { y: -40 });
		rectTl.to(rect, { y: -190 });
	};
	return { animate };
}
