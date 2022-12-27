import axios from "axios";
import api from "../config/api";

if (typeof window !== 'undefined') {
    axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('token');
    // console.log( "access token is =========== =>",axios.defaults.headers.common['access-token']);

}
export const userLoginService = params => axios.post(api.LOGIN, params);
export const getPostedJobs = params => axios.get(api.GET_POSTED_JOBS+ `?page=${params}`);
export const getOneJobCandidate = param => axios.get(api.GET_ONE_JOB_CANDIDATE+ `${param}/candidates`)