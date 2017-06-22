import React, {PropTypes} from 'react'
import Question from './Question'
import shuffleArray from 'array-shuffle'

const QuestionList = ({questionList}) => {
	const array = shuffleArray(questionList)
	console.log(array)
	return (
		<div>
			{questionList.map((question) =>
				<Question key={question.answer} question={question} />
			)}
		</div>
	)
}

QuestionList.propTypes = {
	questionList: PropTypes.array.isRequired
}

export default QuestionList
