import React from "react";
import { Button, Image, View, Text } from "react-native";
import HomeScreen from "./components/Home";
import TopArticles from "./components/TopArticle";
import ViewArticle from "./components/ViewArticle";
import Categories from "./components/Categories";
import Styles from "./styles/Main";
import {
  createMaterialTopTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

const MainStack = createMaterialTopTabNavigator(
  {
    Recentes: { screen: HomeScreen },
    TopArticles: { screen: TopArticles }
  },
  {
    tabBarPosition: "top",
    initialRouteName: "Recentes",
    tabBarOptions: {
      tabStyle: {
        paddingTop: 30,
        paddingBottom: 0,
        height: 70,
        backgroundColor: "#26427b"
      },
      indicatorStyle: {
        backgroundColor: null
      },
      style: {
        backgroundColor: Styles.colorOne
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
