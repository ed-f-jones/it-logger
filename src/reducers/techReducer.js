import {
    GET_TECHS,
    ADD_TECHS,
    DELETE_TECH,
    SET_LOADING,
    TECH_ERROR,
    LOGS_ERROR
} from '../actions/types';

const initialState = {
    techs: null,
    loading: false,
    error: null
};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_TECHS:
            return {
                ...state,
                tech: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
        return state;
    }
};