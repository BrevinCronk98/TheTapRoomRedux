import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
	return (
		<React.Fragment>
			<div onClick={() => props.whenKegClicked(props.id)}>
				<h3>{props.kegBrand}</h3>
				<h3>{props.kegName}</h3>
				<h3>{props.kegPrice}</h3>
				<h3>{props.kegAlcoPerc}</h3>
				<h3>{props.kegQuantity}</h3>
			</div>
		</React.Fragment>
	);
}

Keg.propTypes = {
	kegName: PropTypes.string,
	kegPrice: PropTypes.number,
	kegQuantity: PropTypes.number,
	whenKegClicked: PropTypes.func,
	id: PropTypes.string,
	kegBrand: PropTypes.string,
	kegAlcoPerc: PropTypes.string
};
