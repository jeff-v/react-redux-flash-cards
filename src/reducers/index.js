import questionList from './Questions/questionList-reducer.js'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  questionList
});

export default rootReducer;
