import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import KegDetails from './KegDetails';
import EditKegForm from './EditKegForm';

class KegControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			formVisibleOnPage: false,
			selectedKeg: null,
			editing: false,
			broke: false,
			userMoney: 100,
			kegList: [
				{
					kegBrand: 'Elysian Brewery',
					kegName: 'Space Dust',
					kegPrice: 5,
					kegAlcoPerc: '8.2%',
					kegQuantity: 124,
					id: '0'
				},
				{
					kegBrand: 'Sacred Hop Brewery Co.',
					kegName: 'Willy Maze Haze',
					kegPrice: 5,
					kegAlcoPerc: '8.4%',
					kegQuantity: 124,
					id: '1'
				},
				{
					kegBrand: 'Bud Light Brewery',
					kegName: 'Bud Light',
					kegPrice: 3,
					kegAlcoPerc: '3.2%',
					kegQuantity: 124,
					id: '2'
				},
				{
					kegBrand: 'Corona',
					kegName: 'Corona Extra',
					kegPrice: 4,
					kegAlcoPerc: '4.6%',
					kegQuantity: 124,
					id: '3'
				},
				{
					kegBrand: 'Modelo',
					kegName: 'Modelo Especial',
					kegPrice: 4,
					kegAlcoPerc: '3.9%',
					kegQuantity: 124,
					id: '4'
				},
				{
					kegBrand: 'Heineken',
					kegName: 'Heineken Lager',
					kegPrice: 3,
					kegAlcoPerc: '4.2%',
					kegQuantity: 124,
					id: '5'
				}
			]
		};
	}

	handleClick = () => {
		if (this.state.selectedKeg != null) {
			this.setState({
				formVisibleOnPage: false,
				selectedKeg: null,
				editing: false
			});
		} else {
			this.setState((prevState) => ({
				formVisibleOnPage: !prevState.formVisibleOnPage
			}));
		}
	};

	handleAddingNewKegToList = (newKeg) => {
		const newKegList = this.state.kegList.concat(newKeg);
		this.setState({
			kegList: newKegList,
			formVisibleOnPage: false
		});
	};

	hanleChangingSelectedKeg = (id) => {
		const selectedKeg = this.state.kegList.filter((keg) => keg.id === id)[0];
		this.setState({ selectedKeg: selectedKeg });
	};

	handleDeletingKeg = (id) => {
		const newKegList = this.state.kegList.filter((keg) => keg.id !== id);
		this.setState({
			kegList: newKegList,
			selectedKeg: null
		});
	};

	handleEditClick = () => {
		this.setState({ editing: true });
		console.log('help');
	};

	handleBuyingKeg = (id) => {
		const purchasedKeg = this.state.kegList.filter((keg) => keg.id === id)[0];
		purchasedKeg.kegQuantity -= 1;
		if (purchasedKeg.kegQuantity < 0) {
			purchasedKeg.kegQuantity = 0;
		}

		const newKegList = this.state.kegList
			.filter((keg) => keg.id !== this.state.selectedKeg.id)
			.concat(purchasedKeg);
		const newWallet = this.state.userMoney;
		this.setState({ kegList: newKegList });
		this.setState({ userMoney: newWallet });
	};

	handleRestockingKeg = (id) => {
		const restockedKeg = this.state.kegList.filter((keg) => keg.id === id)[0];
		restockedKeg.kegQuantity += 124;
		if (restockedKeg.kegQuantity >= 124) {
			restockedKeg.kegQuantity = 124;
		}
		const newKegList = this.state.kegList
			.filter((keg) => keg.id !== this.state.selectedKeg.id)
			.concat(restockedKeg);
		this.setState({ kegList: newKegList });
	};

	handleEditingKegInList = (kegToEdit) => {
		const editedKegList = this.state.kegList
			.filter((keg) => keg.id !== this.state.selectedKeg.id)
			.concat(kegToEdit);
		this.setState({
			kegList: editedKegList,
			editing: false,
			selectedKeg: null
		});
	};

	render() {
		let currentlyVisibleState = null;
		let buttonText = null;

		if (this.state.editing) {
			currentlyVisibleState = (
				<EditKegForm keg={this.state.selectedKeg} onEditKeg={this.handleEditingKegInList} />
			);
			buttonText = 'Return to List';
		} else if (this.state.formVisibleOnPage) {
			currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
			buttonText = 'Return To Keg List';
		} else if (this.state.selectedKeg !== null) {
			currentlyVisibleState = (
				<KegDetails
					keg={this.state.selectedKeg}
					onClickDelete={this.handleDeletingKeg}
					onClickEdit={this.handleEditClick}
					onClickBuy={this.handleBuyingKeg}
					onClickRestock={this.handleRestockingKeg}
				/>
			);
			buttonText = 'Return To Kegs';
		} else {
			currentlyVisibleState = (
				<KegList kegList={this.state.kegList} onKegSelection={this.hanleChangingSelectedKeg} />
			);
			buttonText = 'Add a New Drink';
		}

		return (
			<React.Fragment>
				<h4 id="wallet">Your Wallet: ${this.state.userMoney}</h4>
				<br />
				{currentlyVisibleState}
				<div id="main">
					<button id="main-btn" onClick={this.handleClick}>
						{buttonText}
					</button>
				</div>
			</React.Fragment>
		);
	}
}

export default KegControl;
