import React from 'react';

class KegControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			kegList: [
				{
					kegBrand: 'Elysian Brewery',
					kegName: 'Space Dust',
					kegPrice: 5,
					kegAlcoPerc: '8.2%',
					kegQuantity: 44
				},
				{
					kegBrand: 'Sacred Hop Brewery Co.',
					kegName: 'Willy Maze Haze',
					kegPrice: 5,
					kegAlcoPerc: '8.4%',
					kegQuantity: 23
				},
				{
					kegBrand: 'Bud Light Brewery',
					kegName: 'Bud Light',
					kegPrice: 3,
					kegAlcoPerc: '3.2%',
					kegQuantity: 66
				},
				{
					kegBrand: 'Corona',
					kegName: 'Corona Extra',
					kegPrice: 4,
					kegAlcoPerc: '4.6%',
					kegQuantity: 76
				},
				{
					kegBrand: 'Modelo',
					kegName: 'Modelo Especial',
					kegPrice: 4,
					kegAlcoPerc: '3.9%',
					kegQuantity: 32
				},
				{
					kegBrand: 'Heineken',
					kegName: 'Heineken Lager',
					kegPrice: 3,
					kegAlcoPerc: '4.2%',
					kegQuantity: 45
				}
			]
		};
	}
}

export default KegControl;
