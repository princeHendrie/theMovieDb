import {combineReducers} from 'redux';
import TopRatedMovieReducer from './TopRatedMovieReducer';
import UpcomingMovieReducer from './UpcomingMovieReducer';
import NowPlayingMoviesReducer from './NowPlayingMoviesReducer';
import PopularMoviesReducer from './PopularMoviesReducer';
import PopularTVShowsReducer from './PopularTVShowsReducer';
import TopRatedTVShowsReducer from './TopRatedTVShowsReducer';
import OnTheAirTVShowsReducer from './OnTheAirTVShowsReducer';
import AiringTodayTVShowsResucer from './AiringTodayTVShowsResucer';
import PopularPeopleReducer from './PopularPeopleReducer';
import DetailPeopleReducer from './DetailPeopleReducer';

export default combineReducers({
    topRatedMovie: TopRatedMovieReducer,
    upcomingMovie: UpcomingMovieReducer,
    nowPlayingMovies: NowPlayingMoviesReducer,
    popularMovies: PopularMoviesReducer,
    popularTVShows: PopularTVShowsReducer,
    topRatedTVShows: TopRatedTVShowsReducer,
    onTheAirTVShows: OnTheAirTVShowsReducer,
    airingTodayTVShows: AiringTodayTVShowsResucer,
    popularPeople: PopularPeopleReducer,
    detailPeople: DetailPeopleReducer,
});