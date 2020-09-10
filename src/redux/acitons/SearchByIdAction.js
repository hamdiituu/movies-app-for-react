import {get} from '../../utils/networking'
import {SEARCH_BY_ID_FAILURE,SEARCH_BY_ID_SUCCESS} from '../types/SearchByIdType';
export const searchById = (imdbId) => {
    return dispatch => {
        return get({i : imdbId})
            .then(({data, status}) => {
                if (status !== 200) {
                    throw data;
                }
                //console.log(imdbId,data)

                dispatch({
                    type: SEARCH_BY_ID_SUCCESS,
                    payload: data
                });
            })
            .catch(error => {
                dispatch({
                    type: SEARCH_BY_ID_FAILURE,
                    payload: error
                });
            });
    }
};