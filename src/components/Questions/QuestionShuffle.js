import React, {PropTypes} from 'react'
import {questionArray} from './Question'
import shuffleArray from 'array-shuffle'

const QuestionShuffle = (props) => {
	const questionArray = props.questionArray
	const array = shuffleArray(questionArray)
	console.log(array)
	return (
		<div>
			{array}
		</div>
	)
}

export default QuestionShuffle
