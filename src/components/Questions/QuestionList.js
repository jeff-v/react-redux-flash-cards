import React, {PropTypes} from 'react'
import Question from './Question'
import shuffleArray from 'array-shuffle'

const QuestionList = (props) => {
	const questionList = props.questionList
	const finishStack = props.finishStack
	const mappedList = questionList.map(question =>
		<Question key={question.answer} question={question} />)
	const array = shuffleArray(mappedList)

	if(finishStack === false) {
		console.log("changed")
	return (
		<div>
			{array}
		</div>
	)
}
	return (
		<div>
			<div>{mappedList}</div>
		</div>
	)
}





QuestionList.propTypes = {
	questionList: PropTypes.array.isRequired
}

export default QuestionList
