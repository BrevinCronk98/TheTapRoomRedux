import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {
	return (
		<React.Fragment>
			{Object.values(props.kegList).map((keg) => {
				return (
					<Keg
						whenKegClicked={props.onKegSelection}
						kegBrand={keg.kegBrand}
						kegName={keg.kegName}
						kegPrice={keg.kegPrice}
						kegAlcoPerc={keg.kegAlcoPerc}
						kegQuantity={keg.kegQuantity}
						id={keg.id}
						key={keg.id}
					/>
				);
			})}
		</React.Fragment>
	);
}
KegList.propTypes = {
	kegList: PropTypes.object,
	onKegSelection: PropTypes.func,
	onClickBuy: PropTypes.func
};

export default KegList;
