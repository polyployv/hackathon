import React, { Component } from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";

export const Navigator = new createStackNavigator(
  {
    HomeScreen: {screen: HomeScreen}
  },
  {
    initialRouteName: "HomeScreen"
  }
);

const AppContainer = createAppContainer(Navigator);

class StackNavigator extends Component {
  render() {
    return <AppContainer />;
  }
}

export default StackNavigator;
