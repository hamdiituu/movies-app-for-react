import {PAGE_DECREASE,PAGE_INCREASE,PAGE_RESET} from '../types/PageControlType'

export const pageDecrease = ()=>({
    type : PAGE_DECREASE,
    payload :1
});

export const pageIncrease = ()=>({
    type : PAGE_INCREASE,
    payload :1
});

export const pageReset = ()=>({
    type : PAGE_RESET
});

