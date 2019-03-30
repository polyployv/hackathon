import React, { Component } from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import RegisterEmployers from "../screens/RegisterEmployers.js";
import RegisterPWDs from "../screens/RegisterPWDs";
import LoginEmployers from "../screens/LoginEmployers";
import LoginPWDs from "../screens/LoginPWDs";
import IndexPWDs from "../screens/IndexPWDs";
import IndexEmployers from "../screens/IndexEmployers";
import FilterEmployers from "../screens/FilterEmployers";
import SubmitToReview from "../screens/SubmitToReview";

export const Navigator = new createStackNavigator(
  {
    HomeScreen: {screen: HomeScreen},
    RegisterEmployers: {screen: RegisterEmployers},
    RegisterPWDs: {screen: RegisterPWDs},
    LoginEmployers: {screen: LoginEmployers},
    LoginPWDs: {screen: LoginPWDs},
    IndexPWDs: {screen: IndexPWDs},
    IndexEmployers: {screen: IndexEmployers},
    FilterEmployers: {screen: FilterEmployers},
    SubmitToReview: {screen: SubmitToReview}
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
