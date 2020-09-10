import {PAGE_DECREASE,PAGE_INCREASE} from '../types/PageControlType'
export const PageControlReducer = (state = 0, action) => {
    switch (action.type) {
        case PAGE_INCREASE:
            return  state + action.payload;
        case PAGE_DECREASE:
            return  state - action.payload;
        default:
            return state;
    }
};
