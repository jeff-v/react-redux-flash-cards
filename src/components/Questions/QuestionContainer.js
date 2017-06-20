import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as questionListActions from '../../actions/questionList-actions'
import QuestionList from './QuestionList'
import QuestionInput from './QuestionInput'

class QuestionContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			questionList: []
		}
	}

	render() {
		const {questionList} = this.props

		return (
			<div>
				<QuestionInput addQuestion={this.props.actions.addQuestion} />
				<QuestionList questionList={questionList} />
			</div>
		)
	}
}

QuestionContainer.propTypes = {
	questionList: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
}

function mapStateToProps(state, props) {
	return {
		questionList: state.questionList
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(questionListActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer)