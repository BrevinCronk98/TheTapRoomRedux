import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

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
			<form onSubmit={handleNewKegFormSubmission}>
				<input type="text" name="kegBrand" placeholder="Enter a Brand!" />
				<input type="text" name="kegName" placeholder="Enter a Drink Name!" />
				<input type="text" name="kegPrice" placeholder="Enter the Price!" />
				<input type="text" name="kegAlcoPerc" placeholder="Enter the Alcohol Percentage!" />
			</form>
		</React.Fragment>
	);
}

NewKegForm.propTypes = {
	onNewKegCreation: PropTypes.func
};

export default NewKegForm;
