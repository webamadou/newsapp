import React from "react";
import { View, Text, Image } from "react-native";
import Articles from "../sources/Articles";
import Styles from "../styles/Main";
import { ScrollView } from "react-native-gesture-handler";

export default class ViewArticle extends React.Component {
  state = {};
  render() {
    const { params } = this.props.navigation.state;
    const idArticle = params ? params.idArticle : null;
    const index = params ? params.index : 0;
    const Article = Articles[index];
    const data = Article.data[0];

    return (
      <View>
        <ScrollView>
          <View style={Styles.imageWrapper}>
            <Image
              source={{ uri: data.attributes.featuredImage }}
              style={Styles.imageArticle}
            />
          </View>
          <Text style={Styles.categoryArticles}>Category</Text>
          <Text style={Styles.titleArticle}>{data.attributes.title}</Text>
          <Text style={[Styles.baseText, Styles.ArticleContent]}>
            Consectetur et pariatur ad proident aliqua eiusmod amet aliqua.
            Ipsum adipisicing veniam irure non. Nulla reprehenderit cillum velit
            officia. Eu nisi magna velit veniam consequat quis ea irure
            excepteur quis voluptate duis labore cupidatat. Nostrud sunt eu
            aliqua dolor incididunt. Labore excepteur eu ea Lorem laborum nulla
            qui ipsum eiusmod. Dolor qui nostrud consectetur irure. Veniam irure
            qui irure anim anim. Commodo anim aliquip aliquip esse eiusmod
            occaecat. Aliqua sint esse sunt quis. Ut ipsum ad tempor ullamco
            elit. Exercitation adipisicing officia est consectetur dolor
            reprehenderit dolor dolor irure. Do ullamco esse velit sint ad.
            Consequat ad est laborum nisi amet adipisicing fugiat mollit culpa
            consequat officia voluptate.
          </Text>
        </ScrollView>
      </View>
    );
  }
}
