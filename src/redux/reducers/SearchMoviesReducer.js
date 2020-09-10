import {SEARCH_MOVIE_FAILURE,SEARCH_MOVIE_SUCCESS} from '../types/SearchMoviesType'
export const SearchMoviesReducer =(state={},action)=>{
    switch (action.type){
        case SEARCH_MOVIE_SUCCESS:
            return {...state,searchMovies : action.payload};
        case SEARCH_MOVIE_FAILURE:
            return {...state,searchError : action.payload};
        default:
            return state;

    }
};