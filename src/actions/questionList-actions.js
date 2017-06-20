import * as types from './action-types'

export const addQuestion = (question) => {
	return {
		type: types.ADD_QUESTION,
		question
	}
}