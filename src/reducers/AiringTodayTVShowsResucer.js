import { 
    MOVIE,
    MOVIE_FAIL,
    MOVIE_SUCCESS,
    LOAD_MORE
 } from '../values/types';


 const INITIAL_STATE = { 
    listMovie: [],
    error: '',
    loading: false,
    loadingLoadmore: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MOVIE_SUCCESS:
            return { ...state, error: '', listMovie: action.payload, loading: false, loadingLoadmore: false };
        case MOVIE_FAIL:
            return { ...state, error: action.payload, listMovie: [], loading: false, loadingLoadmore: false };
        case MOVIE:
            return { ...state, loading: true,  error: '' };
        case LOAD_MORE:
            return { ...state, loading: false, loadingLoadmore: true,  error: ''  };
        default:
            return state;
    }
};