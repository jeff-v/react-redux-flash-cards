import React, {PropTypes} from 'react'

const Question = ({question}) => {
	return (
		<div>
			{question.question}, {question.answer}
		</div>
	)
}

Question.propTypes = {
	question: PropTypes.object.isRequired
}

export default Question