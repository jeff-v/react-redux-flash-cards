import React, {PropTypes} from 'react'
import Question from './Question'

const QuestionList = ({questionList}) => {
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