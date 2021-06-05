import React from "react";
import AppHeader from './AppHeader'
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import ScanScreen from './ScanQR'
import { createMaterialTopTabNavigator } from "react-navigation-tabs";

export default class App extends React.Component 
{
  render() 
  {
    return(
      <View>
        <AppHeader/>
        <ScanScreen/>
      </View>
    )
  }
}


const styles = StyleSheet.create(
{
  container: 
  {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});