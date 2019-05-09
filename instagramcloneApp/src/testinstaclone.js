import React, { Component } from 'react';
import {View,Text,StyleSheet, Image} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Login from './components/screens/Login';
import Register from './components/screens/Register';
import MainScreen from './components/screens/MainScreen';


const DemoNavigation= StackNavigator({
    Login:{
        screens:Login
    },
    Register:{
        screens:Register
    },
    MainScreen:{
        screens:MainScreen
    },
},{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
})

export default DemoNavigation;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    }
  });