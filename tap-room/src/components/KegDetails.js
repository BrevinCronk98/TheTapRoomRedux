import React from 'react';
import PropTypes from 'prop-types';

function KegDetails(props) {
	const { keg, onClickDelete, onClickBuy, onClickRestock } = props;
	return (
		<React.Fragment>
			<div id="details">
				<h1>Keg Details</h1>
				<h3>{keg.kegBrand}</h3>
				<h3>{keg.kegName}</h3>
				<h3>{keg.kegPrice}</h3>
				<h3>{keg.kegAlcoPerc}</h3>
				<h3>{keg.kegQuantity}</h3>
				<button id="btn" onClick={props.onClickEdit}>
					Update Keg
				</button>
				<button id="btn" onClick={() => onClickDelete(keg.id)}>
					Delete keg
				</button>
				<button id="btn" onClick={() => onClickBuy(keg.id)}>
					Buy keg
				</button>
				<button id="btn" onClick={() => onClickRestock(keg.id)}>
					Restock keg
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
