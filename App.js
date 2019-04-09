import React, { Component } from 'react';
import { Platform, StyleSheet, BackHandler, Text, View } from 'react-native';
import Navigator from './src/navigator/navigator'
import Ball from './src/pages/Ball'

export default class App extends Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;

  }

  render() {
    return (
      <Navigator />
    );
  }
}
