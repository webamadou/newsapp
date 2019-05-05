import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  AppRegistry,
  FlatList,
  Image,
  TouchableHighlight
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Styles from "../styles/Main";
import LogoTitle from "./Logo";
4;
import Articles from "../sources/Articles";
import ViewArticle from "./ViewArticle";

class HomeScreen extends React.Component {
  componentWillMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  componentDidMount() {
    this.setState({
      articles: this.getArticles()
    });
  }
  state = {
    count: 0,
    articles: {}
  };

  getArticles = () => {
    /* THIS FUNCITON WILL BE USED TO GET THE DATA FROM AN API.*/
    /* SINCE WE DON'T HAVE AN API YET, WE WILL BE USING DATA FROM THE SCRIPT ARTICLES.JS AS THE SOURCES OF OUR DATA */
    /* var url =
      "https://gnews.io/api/v2/?q=example&token=c8d9a22a2a2c4317f1a9286a2229138a";
    var req = new Request(url);
    Axios.get(req).then(function(response) {
      //const data = JSON.stringify(response);
      console.log(JSON.stringify(response));
    }); 
    */
    return Articles;
  };

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  readArticle = id => {
    console.log(`go to page ${id}`);
  };

  render() {
    /* const data = this.articles.data.map((k, v) => {
      console.log(k);
    }); */

    return (
      <View>
        <FlatList
          data={this.state.articles}
          renderItem={({ item }) => (
            <View>
              <View style={Styles.articleContainer}>
                <View style={Styles.imageWrapper}>
                  <TouchableHighlight
                    onPress={() =>
                      this.props.navigation.navigate("ViewArticle", {
                        idArticle: item.data[0].id,
                        index: this.state.articles.indexOf(item)
                      })
                    }
                  >
                    <Image
                      source={{ uri: item.data[0].attributes.featuredImage }}
                      style={Styles.imageArticle}
                    />
                  </TouchableHighlight>
                  <Text style={Styles.categoryArticles}>Category</Text>
                </View>
                <Text style={Styles.titleArticle}>
                  {item.data[0].attributes.title}
                </Text>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const StackNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    ViewArticle: { screen: ViewArticle }
  },
  {
    navigationOptions: {
      headerMode: "none"
    }
  }
);

export default createAppContainer(StackNavigator);
