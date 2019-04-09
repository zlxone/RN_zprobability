import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, } from 'react-navigation';

import Ball from '../pages/Ball'



const RootStack = createStackNavigator({
    Ball: Ball

},
    {
        initialRouteName: 'Ball',
        navigationOptions: {
            header: null
        },
    });

export default RootStack;