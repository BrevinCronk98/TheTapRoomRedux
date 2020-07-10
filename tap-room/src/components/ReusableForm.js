import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
	return (
		<React.Fragment>
			<div id="form">
				<form onSubmit={props.formSubmissionHandler}>
					<label id="label" name="brand">
						Brand Name:
					</label>
					<input id="input" type="text" name="kegBrand" placeholder="Enter a Brand!" />
					<br />
					<label id="label" name="name">
						Beverage Name:
					</label>
					<input id="input" type="text" name="kegName" placeholder="Enter a Drink Name!" />
					<br />
					<label id="label" name="price">
						Price:
					</label>
					<input id="input" type="text" name="kegPrice" placeholder="Enter the Price!" />
					<br />
					<label id="label" name="alc">
						Alcohol Percentage:
					</label>
					<input id="input" type="text" name="kegAlcoPerc" placeholder="Enter the Alcohol Percentage!" />
					<br />
					<label id="label" name="quant">
						Quantity:
					</label>
					<input id="input" type="text" name="kegQuantity" placeholder="Enter the Total Pints" />
					<br />

					<button id="input" type="submit">
						{props.buttonText}
					</button>
				</form>
			</div>
		</React.Fragment>
	);
}

ReusableForm.propTypes = {
	formSubmissionHandler: PropTypes.func,
	buttonText: PropTypes.string
};

export default ReusableForm;
