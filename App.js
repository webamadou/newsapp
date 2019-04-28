import React from "react";
import { Button, Image, View, Text } from "react-native";
import HomeScreen from "./components/Home";
import DetailsScreen from "./components/Details";
import ModalScreen from "./components/Modal";
import Style from "./styles/Main";
import { createStackNavigator, createAppContainer } from "react-navigation";

const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailsScreen
    }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: styles.colorOne
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const AppContainer = createAppContainer(MainStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
