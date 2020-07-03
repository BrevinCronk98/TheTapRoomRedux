import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';

class KegControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			formVisibleOnPage: false,
			kegList: [
				{
					kegBrand: 'Elysian Brewery',
					kegName: 'Space Dust',
					kegPrice: 5,
					kegAlcoPerc: '8.2%',
					kegQuantity: 44,
					id: '0'
				},
				{
					kegBrand: 'Sacred Hop Brewery Co.',
					kegName: 'Willy Maze Haze',
					kegPrice: 5,
					kegAlcoPerc: '8.4%',
					kegQuantity: 23,
					id: '1'
				},
				{
					kegBrand: 'Bud Light Brewery',
					kegName: 'Bud Light',
					kegPrice: 3,
					kegAlcoPerc: '3.2%',
					kegQuantity: 66,
					id: '2'
				},
				{
					kegBrand: 'Corona',
					kegName: 'Corona Extra',
					kegPrice: 4,
					kegAlcoPerc: '4.6%',
					kegQuantity: 76,
					id: '3'
				},
				{
					kegBrand: 'Modelo',
					kegName: 'Modelo Especial',
					kegPrice: 4,
					kegAlcoPerc: '3.9%',
					kegQuantity: 32,
					id: '4'
				},
				{
					kegBrand: 'Heineken',
					kegName: 'Heineken Lager',
					kegPrice: 3,
					kegAlcoPerc: '4.2%',
					kegQuantity: 45,
					id: '5'
				}
			]
		};
	}

	handleClick = () => {
		this.setState((prevState) => ({
			formVisibleOnPage: !prevState.formVisibleOnPage
		}));
	};

	handleAddingNewKegToList = (newKeg) => {
		const newKegList = this.state.kegList.concat(newKeg);
		this.setState({
			kegList: newKegList,
			formVisibleOnPage: false
		});
	};

	render() {
		let currentlyVisibleState = null;
		let buttonText = null;
		if (this.state.formVisibleOnPage) {
			currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
			buttonText = 'Return To Keg List';
		} else {
			currentlyVisibleState = <KegList kegList={this.state.kegList} />;
			buttonText = 'Add a New Drink';
		}

		return (
			<React.Fragment>
				{currentlyVisibleState}
				<button onClick={this.handleClick}>{buttonText}</button>
			</React.Fragment>
		);
	}
}

export default KegControl;
