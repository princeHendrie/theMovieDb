import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Button, Icon, Right } from "native-base";


import Menu from '../pages/Menu';
import TopRatedMovies from '../pages/TopRatedMovies';
import UpcomingMovies from '../pages/UpcomingMovies';
import NowPlayingMovies from '../pages/NowPlayingMovies';
import PopularMovies from '../pages/PopularMovies';

import PopularTVShows from '../pages/PopularTVShows';
import TopRatedTVShows from '../pages/TopRatedTVShows';
import OnTheAirTVShows from '../pages/OnTheAirTVShows';
import AiringTodayTVShows from '../pages/AiringTodayTVShows';
import PopularPeople from '../pages/PopularPeople';

import DetailMovie from '../pages/DetailMovie';
import DetailTvShow from '../pages/DetailTvShow';
import DetailPeople from '../pages/DetailPeople';


const RouterComponent = () => {
    return (
            <Router>       
                 <Scene key="root" hideNavBar={true}>
                    
                    <Scene key="main"> 

                        <Scene
                            initial={true}
                            key="drawer"
                            drawer
                            contentComponent={Menu}
                            drawerWidth={300}
                            hideNavBar
                            >


                            <Scene
                                key="topRatedMovies"
                                title="Top Rated Movies"
                                component={TopRatedMovies}/>

                            <Scene
                                key="upcomingMovies"
                                title="Upcoming Movies"
                                component={UpcomingMovies}/>

                            <Scene
                                key="nowPlayingMovies"
                                title="Now playing movies"
                                component={NowPlayingMovies}/>

                            <Scene
                                key="popularMovies"
                                title="Popular movies"
                                component={PopularMovies}/>

                            <Scene
                                key="popularTVShows"
                                title="Popular TV shows"
                                component={PopularTVShows}/>

                            <Scene
                                key="topRatedTVShows"
                                title="Top rated TV shows"
                                component={TopRatedTVShows}/>

                            <Scene
                                key="onTheAirTVShows"
                                title="On the air TV shows"
                                component={OnTheAirTVShows}/>

                            <Scene
                                key="airingTodayTVShows"
                                title="Airing today TV shows"
                                component={AiringTodayTVShows}/>

                            <Scene
                                key="popularPeople"
                                title="Popular people"
                                component={PopularPeople}/>

                        </Scene>

                        <Scene
                                key="detailMovie"
                                title="Detail Movie"
                                component={DetailMovie}/>

                        <Scene
                                key="detailTvShow"
                                title="Detail Tv Show"
                                component={DetailTvShow}/>

                        <Scene
                                key="detailPeople"
                                title="Detail People"
                                component={DetailPeople}/>


                    </Scene>
                </Scene>

            </Router>
    );
};


export default RouterComponent;