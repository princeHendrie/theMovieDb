import { 
    MOVIE,
    MOVIE_FAIL,
    MOVIE_SUCCESS
 } from '../values/types';


 const INITIAL_STATE = { 
    listData: [],
    error: '',
    loading: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MOVIE_SUCCESS:
            return { ...state, error: '', listData: action.payload, loading: false };
        case MOVIE_FAIL:
            return { ...state, error: action.payload, listData: [], loading: false };
        case MOVIE:
            return { ...state, loading: true,  error: '' };
        default:
            return state;
    }
};