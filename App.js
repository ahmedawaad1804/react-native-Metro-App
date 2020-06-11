import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator, createStackNavigator,createBottomTabNavigator } from 'react-navigation'
/*Screens*/
import StationScreen from './screens/StationScreen'
import LineScreen from './screens/LineScreen'
import MainNavigator from './screens/MainNavigator'
import StationLocation from './screens/StationLocation'
import NearestStationScreen from './screens/NearestStationScreen'

export default class App extends React.Component {
  render(){
    return (
      
    <AppNavigator />)}
}

const AppNavigator = createStackNavigator({
    'Main':MainNavigator,
    'Stations':StationScreen,
    'StationLocation':StationLocation,
    'LineScreen':LineScreen,
    'NearestStationScreen':NearestStationScreen
  

})

