import { useState } from 'react';

export default function useCardController() {
	let [picView, setPicView] = useState(false);

	let handleSearchClick = () => {
		setPicView(true);
	};

	let closeView = () => {
		setPicView(false);
	};

	return { picView, handleSearchClick, closeView };
}
