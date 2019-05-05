import React from "react";
import { View, Text, FlatList, Image, TouchableHighlight } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Styles from "../styles/Main";

export default class ArticleList extends React.Component {
  render() {
    const item = this.props.item;

    return (
      <View>
        <View style={Styles.articleContainer}>
          <View style={Styles.imageWrapper}>
            <TouchableHighlight onPress={() => this.props.viewArticle}>
              <Image
                source={{ uri: item.data[0].attributes.featuredImage }}
                style={Styles.imageArticle}
              />
            </TouchableHighlight>
            <Text
              style={Styles.categoryArticles}
              onPress={() =>
                this.props.navigation.navigate("Categories", {
                  categorieId: 1,
                  categoryName: "Sport"
                })
              }
            >
              {item.data[0].relationships.categories.title}
            </Text>
          </View>
          <Text style={Styles.titleArticle}>
            {item.data[0].attributes.title}
          </Text>
        </View>
      </View>
    );
  }
}
