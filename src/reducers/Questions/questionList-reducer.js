import * as types from '../../actions/action-types'

export default (state = [], action) => {
	switch (action.type) {
		case types.ADD_QUESTION:
			return [...state, Object.assign({}, action.question)]
		default:
			return state
	}
}