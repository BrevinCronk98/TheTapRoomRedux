import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewKegForm(props) {
	function handleNewKegFormSubmission(event) {
		event.preventDefault();
		props.onNewKegCreation({
			kegBrand: event.target.kegBrand.value,
			kegName: event.target.kegName.value,
			kegPrice: event.target.kegPrice.value,
			kegAlcoPerc: event.target.kegAlcoPerc.value,
			kegQuantity: event.target.kegQuantity.value,
			id: v4()
		});
	}
	return (
		<React.Fragment>
			<ReusableForm formSubmissionHandler={handleNewKegFormSubmission} buttonText="Add New Keg" />
		</React.Fragment>
	);
}

NewKegForm.propTypes = {
	onNewKegCreation: PropTypes.func
};

export default NewKegForm;
