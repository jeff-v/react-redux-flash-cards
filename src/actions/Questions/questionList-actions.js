import * as types from './action-types'

export const addQuestion = (question) => {
	return {
		type: types.ADD_QUESTION,
		question
	}
}

export const removeQuestion = (question) => {
	return {
		type: types.REMOVE_QUESTION,
		question
	}
}

export const finishStack = (questionList) => {
	return {
		type: types.FINISH_STACK,
		questionList
	}
}
