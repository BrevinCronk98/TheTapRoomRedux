import * as c from './../actions/actionTypes';

const kegList = {
	0: {
		kegBrand: 'Elysian Brewery',
		kegName: 'Space Dust',
		kegPrice: 5,
		kegAlcoPerc: '8.2%',
		kegQuantity: 124,
		id: '0'
	},
	1: {
		kegBrand: 'Sacred Hop Brewery Co.',
		kegName: 'Willy Maze Haze',
		kegPrice: 5,
		kegAlcoPerc: '8.4%',
		kegQuantity: 124,
		id: '1'
	},
	2: {
		kegBrand: 'Bud Light Brewery',
		kegName: 'Bud Light',
		kegPrice: 3,
		kegAlcoPerc: '3.2%',
		kegQuantity: 124,
		id: '2'
	},
	3: {
		kegBrand: 'Corona',
		kegName: 'Corona Extra',
		kegPrice: 4,
		kegAlcoPerc: '4.6%',
		kegQuantity: 124,
		id: '3'
	},
	4: {
		kegBrand: 'Modelo',
		kegName: 'Modelo Especial',
		kegPrice: 4,
		kegAlcoPerc: '3.9%',
		kegQuantity: 124,
		id: '4'
	},
	5: {
		kegBrand: 'Heineken',
		kegName: 'Heineken Lager',
		kegPrice: 3,
		kegAlcoPerc: '4.2%',
		kegQuantity: 124,
		id: '5'
	}
};

export default (state = kegList, action) => {
	const { kegBrand, kegName, kegPrice, kegAlcoPerc, kegQuantity, id } = action;
	switch (action.type) {
		case c.ADD_KEG:
			return Object.assign({}, state, {
				[id]: {
					kegBrand: kegBrand,
					kegName: kegName,
					kegPrice: kegPrice,
					kegAlcoPerc: kegAlcoPerc,
					kegQuantity: kegQuantity,
					id: id
				}
			});
		case c.DELETE_KEG:
			const newState = { ...state };
			delete newState[id];
			return newState;
		default:
			return state;
	}
};
