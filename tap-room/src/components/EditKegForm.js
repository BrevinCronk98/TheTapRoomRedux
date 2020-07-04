import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function EditKegForm(props) {
	function handleEditKegFormSubmission(event) {
		event.preventDefault();
		props.onEditKeg({
			kegBrand: event.target.kegBrand.value,
			kegName: event.target.kegName.value,
			kegPrice: event.target.kegPrice.value,
			kegAlcoPerc: event.target.kegAlcoPerc.value,
			kegQuantity: event.target.kegQuantity.value
		});
	}
	return (
		<React.Fragment>
			<ReusableForm formSubmissionHandler={handleEditKegFormSubmission} buttonText="Update Keg" />
		</React.Fragment>
	);
}

EditKegForm.propTypes = {
	onEditKeg: PropTypes.func
};

export default EditKegForm;
