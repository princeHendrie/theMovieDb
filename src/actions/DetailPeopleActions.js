import axios from 'axios';
import { 
    MOVIE,
    MOVIE_FAIL,
    MOVIE_SUCCESS
 } from '../values/types';

 import {host,apiKey} from '../config/config';



export const firstTime = (id) => {
    return (dispatch) => {
        dispatch({ type: MOVIE });
        
        getMovie(dispatch,id)
    };
};


 export const getMovie = (dispatch,id) => {

            axios.get(host+'/person/'+id+'?api_key='+apiKey+'&language=en-US', 
                { headers:
                    {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    }
                }).then((response) => {
                    //alert(JSON.stringify(response))
                    var list = [];

                        let data  = {
                            gender: response['data']['gender'],
                            biography: response['data']['biography'],
                            placeOfBirth: response['data']['place_of_birth'],
                            birthday: response['data']['birthday'],
                            knownForDepartment: response['data']['known_for_department'],
                          }

                        list.push(data)

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
      
                      //alert(error);
                      dispatch({type: MOVIE_FAIL, payload: error})
                }); 

    };