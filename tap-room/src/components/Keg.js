import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
	const { keg, onClickBuy } = props;
	return (
		<React.Fragment>
			<div onClick={() => props.whenKegClicked(props.id)} id="kegList">
				<h3>Brand: {props.kegBrand}</h3>
				<h3>Name: {props.kegName}</h3>
				<h3>Price: {props.kegPrice}</h3>
				<h3>ABV: {props.kegAlcoPerc}</h3>
				<h3>Pints Left: {props.kegQuantity}</h3>
				<button onClick={() => onClickBuy(keg.id)}>Buy keg</button>
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
