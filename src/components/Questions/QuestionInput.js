import React, {PropTypes, Component} from 'react'

class QuestionInput extends Component {
	constructor(props) {
		super(props)

		this.onAddQuestionClick = this.onAddQuestionClick.bind(this)
	}

	onAddQuestionClick() {
		const questionElement = document.getElementById('question')
		const answerElement = document.getElementById('answer')

		this.props.addQuestion({
			question: questionElement.value,
			answer: answerElement.value
		})

		questionElement.value = ""
		answerElement.value = ""

		questionElement.focus()

	}

	componentDidMount() {
		document.getElementById('question').focus()
	}

	render() {
		return (
			<div>
				<input id="question" type="text" placeholder="question" />
				<input id="answer" type="text" placeholder="answer" />
				<button onClick={this.onAddQuestionClick}>Add Question</button>
			</div>
		)
	}
}

QuestionInput.propTypes = {
	addQuestion: PropTypes.func.isRequired
}

export default QuestionInput