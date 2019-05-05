import React from "react";
import { View, Text, Image } from "react-native";
import Articles from "../sources/Articles";
import Styles from "../styles/Main";
import { ScrollView } from "react-native-gesture-handler";

export default class ViewArticle extends React.Component {
  state = {};
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params ? `${params.section}` : ""
    };
  };
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
            Non Lorem enim occaecat anim ullamco cupidatat Lorem minim quis.
            Aliqua aute minim eiusmod est. Reprehenderit commodo ex elit id nisi
            do labore labore commodo nisi. Exercitation reprehenderit sint sit
            sunt dolore proident dolor eu et qui quis et sint. In minim officia
            ut deserunt consectetur. Excepteur aliquip duis culpa esse
            incididunt mollit veniam id aliqua velit velit. Dolor ex elit minim
            ipsum reprehenderit irure incididunt elit et. Incididunt ullamco
            minim incididunt pariatur minim et aute tempor. Sit exercitation
            sunt et adipisicing ex labore pariatur mollit cillum consectetur
            nostrud aliquip in amet. Cillum aliquip esse magna Lorem pariatur
            laboris non. Duis deserunt dolore cillum anim fugiat cillum ea do
            ad. Esse aliquip do esse cillum commodo in eiusmod amet
            reprehenderit velit adipisicing. Commodo sit velit proident deserunt
            sit. Duis commodo fugiat et dolore Lorem in cillum deserunt sint
            est. Incididunt reprehenderit aliquip voluptate amet sunt nulla qui
            eu enim eu ipsum quis cupidatat non. Dolore cupidatat proident ut
            fugiat. Id cupidatat in fugiat in quis. Eu veniam reprehenderit do
            sunt fugiat incididunt est ea magna dolor. Ullamco amet ea tempor
            duis cupidatat. Nostrud adipisicing in exercitation sunt et dolor
            dolore dolor elit cillum. Incididunt aute id mollit ipsum eiusmod
            enim adipisicing ut dolore velit proident irure enim. Lorem elit
            occaecat ipsum exercitation eu ut qui dolore sit minim. Id officia
            commodo ipsum aliqua voluptate tempor officia enim cillum nostrud.
            Pariatur sunt eu irure amet ad. In et pariatur in deserunt. Quis
            excepteur adipisicing labore sint excepteur sunt anim ullamco
            exercitation. Veniam irure tempor quis nostrud non. Proident
            adipisicing eu aute sit laborum anim adipisicing proident nostrud
            mollit enim. Aliqua excepteur dolor dolor ullamco do pariatur
            adipisicing labore veniam deserunt. Et culpa pariatur ipsum elit
            velit in minim aliqua dolor voluptate voluptate. Esse Lorem occaecat
            duis ex qui sunt sunt aliquip ut fugiat. Ut non duis ex velit dolor
            adipisicing fugiat dolore cupidatat sint dolore consequat fugiat
            aliqua. Minim anim est ex in est aliqua dolor eiusmod exercitation
            ex aute incididunt. Fugiat est veniam dolor dolore dolore veniam
            labore magna qui cupidatat minim.
          </Text>
        </ScrollView>
      </View>
    );
  }
}
