import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import { RootNavigator } from './src/Router';
import ReduxThunk from 'redux-thunk';

export default class App extends Component {


  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider styles={styles.providerStyle} store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}

const styles = {
  providerStyle: {
    backgroundColor: '#ffd07b'
  }
}
