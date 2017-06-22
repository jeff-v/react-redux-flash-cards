import React, {PropTypes} from 'react'

const Question = ({question}) => {
	return (
		<div>
			<div>
				{question.question} 
			</div>
			<div>
				{question.answer}
			</div>
		</div>
	)
}

Question.propTypes = {
	question: PropTypes.object.isRequired
}

export default Question