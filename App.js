/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StatusBar } from 'react-native';
import Router from './src/routers/Router';

import styles from './src/values/styles';
import SplashScreen from 'react-native-splash-screen';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import  reducers from './src/reducers'
import  ReduxThunk from 'redux-thunk';


export default class App extends Component {

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    const store = createStore(reducers,{}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
          <Router />
    </Provider>
    );
  }
}
