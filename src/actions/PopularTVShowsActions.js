import axios from 'axios';
import { 
    MOVIE,
    MOVIE_FAIL,
    MOVIE_SUCCESS,
    LOAD_MORE
 } from '../values/types';

 import {host,apiKey} from '../config/config';


 export const loadmore = (page) => {
    return (dispatch) => {
        dispatch({ type: LOAD_MORE });
        
        getMovie(dispatch,page)
    };
};

export const firstTime = (page) => {
    return (dispatch) => {
        dispatch({ type: MOVIE });
        
        getMovie(dispatch,page)
    };
};


 export const getMovie = (dispatch,page) => {

            axios.get(host+'/tv/popular?api_key='+apiKey+'&language=en-US&page='+page, 
                { headers:
                    {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    }
                }).then((response) => {
                    //alert(JSON.stringify(response))
                    var list = [];
                    for(var i=0;i<response['data']['results'].length;i++){

                        let data  = {
                            id: response['data']['results'][i]['id'],
                            voteAverage: response['data']['results'][i]['vote_average'],
                            name: response['data']['results'][i]['name'],
                            originalName: response['data']['results'][i]['original_name'],
                            firstAirDate: response['data']['results'][i]['first_air_date'],
                            overview: response['data']['results'][i]['overview'],
                            posterPath: response['data']['results'][i]['poster_path'],
                          }

                        list.push(data)
                    }
                    //alert(JSON.stringify(response['data']['results'][0]))
                    dispatch({type: MOVIE_SUCCESS, payload: list})
                })
                .catch(err => {
                    var error = ""+err;
                    if(error.includes("status code 401")){
                        error = "Wrong parameters.";
                      }else if(error.includes("status code 500") || error.includes("status code 502") || error.includes("status code 503")){
                          error = "Sorry, Service Under Maintenance, Please try again later";
                      }else if(error.includes("Network Error")){
                          error = "Please check your Internet connection.";
                      }
      
                      alert(error);
                      dispatch({type: MOVIE_FAIL, payload: error})
                }); 

    };