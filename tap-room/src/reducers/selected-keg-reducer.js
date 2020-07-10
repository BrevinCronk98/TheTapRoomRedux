import * as c from '../actions/actionTypes';

export default (state = {}, action) => {
	const { selectedKeg } = action;
	switch (action.type) {
		case c.SELECT_KEG:
			const selectedKeg = this.state.kegList.filter((keg) => keg.id === id)[0];

			return selectedKeg;
	}
};
