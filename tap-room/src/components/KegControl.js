import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import KegDetails from './KegDetails';
import EditKegForm from './EditKegForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as a from './../actions/index';

function KegControl(props) {
	const { formVisibleOnPage, selectedKeg, kegList, editing } = props;

	const handleAddKegForm = () => {
		const { dispatch } = props;
		const action = a.toggleForm();
		dispatch(action);
		console.log('help');
	};

	const handleAddingNewKegToList = (newKeg) => {
		const { dispatch } = props;
		const action = a.toggleForm();
		dispatch(action);
		const action2 = a.addKeg(newKeg);
		dispatch(action2);
	};

	const handleChangingSelectedKeg = (id) => {
		const selectedKeg = this.props.kegList[id];
		this.setState({ selectedKeg: selectedKeg });
	};

	const handleDeletingKeg = (id) => {
		const newKegList = this.state.kegList.filter((keg) => keg.id !== id);
		this.setState({
			kegList: newKegList,
			selectedKeg: null
		});
	};

	const handleEditClick = () => {
		this.setState({ editing: true });
	};

	const handleBuyingKeg = (id) => {
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

	const handleRestockingKeg = (id) => {
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

	const handleEditingKegInList = (kegToEdit) => {
		const editedKegList = this.state.kegList
			.filter((keg) => keg.id !== this.state.selectedKeg.id)
			.concat(kegToEdit);
		this.setState({
			kegList: editedKegList,
			editing: false,
			selectedKeg: null
		});
	};

	let currentlyVisibleState = null;
	let buttonText = null;
	let button = null;

	if (editing) {
		currentlyVisibleState = <EditKegForm keg={selectedKeg} onEditKeg={handleEditingKegInList} />;
		button = <button onClick={handleAddKegForm}>{buttonText}</button>;
	} else if (formVisibleOnPage) {
		currentlyVisibleState = <NewKegForm onNewKegCreation={handleAddingNewKegToList} />;
		buttonText = 'Return To Keg List';
	} else if (selectedKeg !== null) {
		currentlyVisibleState = (
			<KegDetails
				keg={selectedKeg}
				onClickDelete={handleDeletingKeg}
				onClickEdit={handleEditClick}
				onClickBuy={handleBuyingKeg}
				onClickRestock={handleRestockingKeg}
			/>
		);
		buttonText = 'Return To Kegs';
	} else {
		currentlyVisibleState = <KegList kegList={kegList} onKegSelection={handleChangingSelectedKeg} />;

		buttonText = 'Add a New Drink';
		button = <button onClick={handleAddKegForm}>Add Keg</button>;
	}

	return (
		<React.Fragment>
			{currentlyVisibleState}
			{button}
		</React.Fragment>
	);
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
