import axios from 'axios';
import * as constans from './constants';
const axiosBase = axios.create({
    params :{
        apikey : constans.API_KEY,
        r:"json"
    }
});

export const get = (params)=>{
    return axiosBase.get(
        constans.API_URL,
        {
        params : params
    })
};