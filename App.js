
import React, { Component } from 'react';
import AppNavigator from './src/configurations/navigation';
import { Provider } from 'react-redux';
import store from './src/configurations/store';
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}