import {
    GET_TECHS,
    ADD_TECHS,
    DELETE_TECH,
    SET_LOADING,
    TECH_ERROR,
    LOGS_ERROR
} from './types';

// get techs from server
export const getTechs = () => async dispatch => {
    try {
        setloading();

        const res = await fetch('/techs');
        const data = await res.json();

        dispatch ({
            type: GET_TECHS,
            payload: data
        });
    } catch (err) {
       dispatch({
        type: TECH_ERROR,
        payload: err.response.statusText
       });
    }
};

// set loading to true
export const setloading = () => {
    return {
        type: SET_LOADING
    };
};