import React, { Component } from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import RegisterEmployers from "../screens/RegisterEmployers";
import RegisterPWDs from "../screens/RegisterPWDs";
import LoginEmployers from "../screens/LoginEmployers";
import LoginPWDs from "../screens/LoginPWDs";

export const Navigator = new createStackNavigator(
  {
    HomeScreen: {screen: HomeScreen},
    RegisterEmployers: {screen: RegisterEmployers},
    RegitsterPWDs: {screen: RegisterPWDs},
    LoginEmployers: {screen: LoginEmployers},
    LoginPWDs: {screen: LoginPWDs}
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
