import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
	return (
		<React.Fragment>
			<div id="kegList">
				<h3>Brand: {props.kegBrand}</h3>
				<h3>Name: {props.kegName}</h3>
				<h3>Price: {props.kegPrice}</h3>
				<h3>ABV: {props.kegAlcoPerc}</h3>
				<h3>Pints Left: {props.kegQuantity}</h3>
				<button onClick={() => props.whenKegClicked(props.id)}>View Details</button>
				<h3>________________________</h3>
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
	kegAlcoPerc: PropTypes.string,
	onClickBuy: PropTypes.func
};

export default Keg;
