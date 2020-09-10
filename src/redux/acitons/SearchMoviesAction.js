import {get} from '../../utils/networking'
import {SEARCH_MOVIE_SUCCESS,SEARCH_MOVIE_FAILURE} from '../types/SearchMoviesType';
export const searchMovies = (params) => {
    return dispatch => {
        return get(params)
            .then(({data, status}) => {
                if (status !== 200) {
                    throw data;
                }

                dispatch({
                    type: SEARCH_MOVIE_SUCCESS,
                    payload: data
                });
            })
            .catch(error => {
                dispatch({
                    type: SEARCH_MOVIE_FAILURE,
                    payload: error
                });
            });
    }
};