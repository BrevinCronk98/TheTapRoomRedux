import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import KegDetails from './KegDetails';
import EditKegForm from './EditKegForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as a from './../actions/index';

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

	handleAddKegForm = () => {
		const { dispatch } = this.props;
		const action = a.toggleForm();
		dispatch(action);
		console.log('help');
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
		const wallet = parseInt(this.state.userMoney);
		const newPrice = parseInt(this.state.kegPrice);
		// const newWallet = wallet - newPrice;
		console.log(typeof wallet);
		console.log(typeof newPrice);
		this.setState({ kegList: newKegList });
		// this.setState({ userMoney: newWallet});
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
		let button = null;

		if (this.state.editing) {
			currentlyVisibleState = (
				<EditKegForm keg={this.state.selectedKeg} onEditKeg={this.handleEditingKegInList} />
			);
			button = <button onClick={this.handleAddKegForm}>Back to Keg List</button>;
		} else if (this.state.formVisibleOnPage === true) {
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
			button = <button onClick={this.handleAddKegForm}>Add Keg</button>;
		}

		return (
			<React.Fragment>
				<h4 id="wallet">Your Wallet: ${this.state.userMoney}</h4>
				<br />
				{currentlyVisibleState}
				{button}
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		kegList: state.kegList,
		formVisibleOnPage: state.formVisibleOnPage,
		editing: state.editing,
		selectedKeg: state.selectedKeg
	};
};
KegControl = connect(mapStateToProps)(KegControl);

KegControl.propTypes = {
	formVisibleOnPage: PropTypes.bool,
	editing: PropTypes.bool,
	selectedKeg: PropTypes.object,
	kegList: PropTypes.object
};

export default KegControl;
