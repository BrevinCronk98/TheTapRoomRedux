import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
	return (
		<React.Fragment>
			<div id="form">
				<form onSubmit={props.formSubmissionHandler}>
					<input id="input" type="text" name="kegBrand" placeholder="Enter a Brand!" />
					<br />
					<input id="input" type="text" name="kegName" placeholder="Enter a Drink Name!" />
					<br />
					<input id="input" type="text" name="kegPrice" placeholder="Enter the Price!" />
					<br />
					<input id="input" type="text" name="kegAlcoPerc" placeholder="Enter the Alcohol Percentage!" />
					<br />
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
