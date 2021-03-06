import { Dimensions } from "react-native";

let width = Dimensions.get("window").width; //full width
let height = Dimensions.get("window").height; //full height
let articleHeight = height - height * 0.3;

let blue = "#213868";
let red = "#cc4448";
let red2 = "#ca393a";
let green = "#3d8b30";
let yellow = "#f6b33a";
let darkBlue = "#132843";
let purple = "#511a23";
let darkgrey = "#333333";

export default (styles = {
  colors: {
    colorOne: blue,
    colorTwo: red,
  },
  logo: {
    width: 100,
    height: 30,
    paddingHorizontal: 12
  },
  container: {
    flex: 1,
    paddingTop: 22
  },
  articleContainer: {
    flex: 1,
    flexDirection: "column",
    justifuContent: "center",
    paddingTop: 0
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  categoryArticles: {
    position: "absolute",
    zIndex: 999,
    paddingHorizontal: 4,
    paddingVertical: 3,
    fontSize: 15,
    top: 0,
    color: blue,
    backgroundColor: "#ffffff",
    borderBottomColor: darkgrey,
    borderBottomWidth: 1
  },
  articlesWrapper: {
    width: width,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginBottom: 3,
    borderWidth: 1,
    borderColor: blue,
    borderStyle: "solid"
  },
  articleContainer: {
    position: "relative",
    padding: 0
    /* borderWidth: 1,
    borderStyle: "solid",
    position: "relative" */
  },
  imageWrapper: {
    width: "100%",
    minHeight: articleHeight / 2,
    overflow: "hidden",
    position: "relative",
    borderTopColor: blue,
    borderTopWidth: 2
  },
  imageArticle: {
    width: "100%",
    height: articleHeight / 2
  },
  titleArticle: {
    fontSize: 25,
    fontWeight: "bold",
    color: darkgrey,
    paddingVertical: 6,
    paddingHorizontal: 12
  },
  baseText: {
    fontSize: 20,
    textAlign: "justify"
  },
  ArticleContent: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    textAlign: "justify"
  },
  /*--- caegories design ---*/
  sport: {
    borderBottomColor: green,
    borderBottomWidth: 1
  },
  politique: {
    borderBottomColor: blue,
    borderBottomWidth: 1
  },
  culture: {
    borderBottomColor: yellow,
    borderBottomWidth: 1
  },
  society: {
    borderBottomColor: blue,
    borderBottomWidth: 1
  }
});
