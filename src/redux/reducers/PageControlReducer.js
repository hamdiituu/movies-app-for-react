import {PAGE_DECREASE,PAGE_INCREASE,PAGE_RESET} from '../types/PageControlType'
export const PageControlReducer = (state = 0, action) => {
    switch (action.type) {
        case PAGE_INCREASE:
            return  state + action.payload;
        case PAGE_DECREASE:
            return  state - action.payload;
        case PAGE_RESET:
            return  state - state;
        default:
            return state;
    }
};
