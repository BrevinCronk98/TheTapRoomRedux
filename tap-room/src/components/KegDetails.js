import React from 'react';
import PropTypes from 'prop-types';

function KegDetails(props) {
	const { keg, onClickDelete, onClickBuy, onClickRestock } = props;
	return (
		<React.Fragment>
			<div id="details">
				<h1>Keg Details</h1>
				<h4>Brand: {keg.kegBrand}</h4>
				<h4>Drink: {keg.kegName}</h4>
				<h4>Price: {keg.kegPrice} Dollars</h4>
				<h4>ACV:{keg.kegAlcoPerc}</h4>
				<h4>Drinks Remaining: {keg.kegQuantity} Pints</h4>
				<button id="btn" onClick={props.onClickEdit}>
					Update Keg
				</button>
				<button id="btn" onClick={() => onClickDelete(keg.id)}>
					Delete Keg
				</button>
				<button id="btn" onClick={() => onClickBuy(keg.id)}>
					Buy Pint
				</button>
				<button id="btn" onClick={() => onClickRestock(keg.id)}>
					Restock Keg
				</button>
			</div>

			<hr />
		</React.Fragment>
	);
}

KegDetails.propTypes = {
	keg: PropTypes.object,
	onClickDelete: PropTypes.func,
	onClickEdit: PropTypes.func,
	onClickBuy: PropTypes.func,
	onClickRestock: PropTypes.func
};

export default KegDetails;
