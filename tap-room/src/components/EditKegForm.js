import React from 'react';
import PropTypes from 'prop-types';

function EditKegForm(props) {
	function handleEditKegFormSubmission(event) {
		event.preventDefault();
		props.onEditKeg({
			kegBrand: event.target.kegBrand.value,
			kegName: event.target.kegName.value,
			kegPrice: parseInt(event.target.kegPrice.value),
			kegAlcoPerc: event.target.kegAlcoPerc.value,
			kegQuantity: event.target.kegQuantity.value
		});
	}
	return (
		<React.Fragment>
			<form onSubmit={handleEditKegFormSubmission}>
				<input type="text" name="kegBrand" placeholder="Enter a Brand!" />
				<input type="text" name="kegName" placeholder="Enter a Drink Name!" />
				<input type="text" name="kegPrice" placeholder="Enter the Price!" />
				<input type="text" name="kegAlcoPerc" placeholder="Enter the Alcohol Percentage!" />
				<input type="text" name="kegQuantity" placeholder="Enter the Total Pints" />
				<button type="submit">Update Keg</button>
			</form>
		</React.Fragment>
	);
}

EditKegForm.propTypes = {
	onEditKeg: PropTypes.func
};

export default EditKegForm;
