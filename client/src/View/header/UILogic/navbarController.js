import React, { useReducer } from 'react';

import { links } from '../UIModel/navLinksModel';

export default function useNavbarController() {
	const initializeState = () => {
		let linkData = links.map(link => {
			if (window.location.pathname === '/' + link) {
				return { name: link, class: 'active' };
			} else if (
				window.location.pathname === '/' &&
				link === 'Home'
			) {
				return { name: link, class: 'active' };
			} else {
				return { name: link, class: 'inactive' };
			}
		});
		return linkData;
	};

	const reducer = (state, action) => {
		switch (action.type) {
			case 'UPDATE_CLASS':
				let newState = state.map(item => {
					if (item.name === action.name) {
						return { name: item.name, class: 'active' };
					} else {
						return {
							name: item.name,
							class: 'inactive'
						};
					}
				});
				return newState;
			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(reducer, initializeState());

	return { dispatch, state };
}
