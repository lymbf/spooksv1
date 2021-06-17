import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function useHomePicAnimation(e, e2, e3) {
	useEffect(() => {
		let docWidth = window.innerWidth;
		let docHeight = window.innerHeight;
		let pic0X = e.current.offsetLeft;
		let pic0Y = e.current.offsetTop;
		let picWidth = e.current.offsetWidth;
		let picHeight = e.current.offsetHeight;
		let picCenterX = pic0X + picWidth / 2;
		let picCenterY = pic0Y + picHeight / 2;

		let pic20X = e2.current.offsetLeft;
		let pic20Y = e2.current.offsetTop;
		let pic2Width = e2.current.offsetWidth;
		let pic2Height = e2.current.offsetHeight;
		let pic2CenterX = pic20X + pic2Width / 2;
		let pic2CenterY = pic20Y + pic2Height / 2;

		let xRotation_base = 30 / picCenterX;
		let yRotation_base = 30 / picCenterY;

		let xRotation_base2 = 30 / (docWidth - pic2CenterX);
		let yRotation_base2 = 30 / (docHeight - pic2CenterY);

		let animate = g => {
			gsap.to(e.current, {
				duration: 2,
				transform: `rotateY(${-30 +
					xRotation_base * g.pageX}deg)
                                   rotateX(${30 - yRotation_base * g.pageY}deg)
                                   `
			});
			gsap.to(e2.current, {
				duration: 2,
				transform: `rotateX(${(-g.pageY + pic2CenterY) *
					yRotation_base2}deg)
                                   rotateY(${(g.pageX - pic2CenterX) *
							xRotation_base2}deg)
                                   `
			});
		};
		document.addEventListener('mousemove', animate);
	}, []);
}
