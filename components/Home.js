import React, { Component } from "react";
import { View, Text, Button, AppRegistry, FlatList } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LogoTitle from "./Logo";
import Styles from "../styles/Main";
import Axios from "axios";

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: <LogoTitle />,
      headerRight: (
        <Button
          onPress={() => navigation.navigate("MyModal")}
          title="Menu"
          color={Styles.colorOne}
        />
      )
    };
  };

  componentWillMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  state = {
    count: 0,
    articles: {}
  };

  getArticles = () => {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=011f49996cf34ff88975c3f04af0d216";

    /* Axios.get(url).then(response => {
      console.log(response);
    }); */
    Axios.get(url).then(response => {
      console.log(response.json());
      this.setState({ articles: response.data });
    });
  };

  componentDidMount() {
    this.getArticles();
  }
  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <View style={Styles.container}>
        <FlatList
          data={[
            { key: "Lebron" },
            { key: "Curry" },
            { key: "Irving" },
            { key: "Jokic" },
            { key: "Janis" },
            { key: "KD" },
            { key: "Lillard" },
            { key: "Harden" },
            { key: "AD" },
            { key: "Green" }
          ]}
          renderItem={({ item }) => <Text>{item.key}</Text>}
        />
      </View>
    );
  }
}
