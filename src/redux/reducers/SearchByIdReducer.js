import {SEARCH_BY_ID_SUCCESS,SEARCH_BY_ID_FAILURE} from '../types/SearchByIdType'
export const SearchByIdReducer =(state={},action)=>{
    switch (action.type){
        case SEARCH_BY_ID_SUCCESS:
            return {...state,searchByIdResp : action.payload};
        case SEARCH_BY_ID_FAILURE:
            return {...state,searchByIdError : action.payload};
        default:
            return state;

    }
};