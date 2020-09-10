import {combineReducers} from 'redux';
import {SearchMoviesReducer} from './SearchMoviesReducer';
import {SearchByIdReducer} from './SearchByIdReducer'
import {PageControlReducer} from './PageControlReducer';
//import reducers
export default combineReducers({
//reducers
    SearchMoviesReducer,
    SearchByIdReducer,
    PageControlReducer
});