import React from 'react';
import {Button, View, Text} from "react-native";
import {createStackNavigator, createMaterialTopTabNavigator, createDrawerNavigator, createAppContainer} from "react-navigation";

import Home from './components/Home';
import Categories from './components/Categories';
import ViewArticle from './components/ViewArticle';
import TopArticles from './components/TopArticles';
import Logo from './components/Logo';
import Menu from './components/Menu';

import Styles from './styles/Main';
import {Ionicons} from "@expo/vector-icons";

const MainStack = createStackNavigator(
  {
    Home: {screen: Home, header: null},
    Categories: {screen: Categories, header: null},
    ViewArticle: {screen: ViewArticle, header: null},
    TopArticles: {screen: TopArticles, header: null}
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Styles.colors.colorOne
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerTitle: <Logo />
    }
  }
);

const Tops = createStackNavigator(
  {
    TopArticles: {screen: TopArticles, header: null},
    Home: {screen: Home, header: null},
    Categories: {screen: Categories, header: null},
    ViewArticle: {screen: ViewArticle, header: null}
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Styles.colors.colorOne
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerTitle: <Logo title="Tops" />
    }
  }
);

const AppContainer = createAppContainer(
  createDrawerNavigator({
    Main: {
      screen: MainStack,
      navigationOptions: {
        drawerLabel: "A LA UNE"
      }
    },
      Tops: {
        screen: Tops,
        navigationOptions: {
          drawerLabel: "+ Populaires"
        }
      }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`;
        } else if (routeName === "Settings") {
          iconName = `${focused ? "ios-options" : "ios-checkbox-outline"}`;
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: Styles.colors.colorOne,
      inactiveTintColor: Styles.colors.colorTwo
    }
  }
  )
);

export default class App extends React.Component{
  /*static navigationOptions = ({ navigation}) => {
    console.log(navigation);

    return {
      headerTitle: 'The title'
    }
  }*/
  toggleTheDrawer = () => {
    console.log("I am the drawer toggler")
  }
  render(){
    return <AppContainer />
  }
}
