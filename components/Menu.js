import React from "react";
import { Image } from "react-native";
import Styles from "../styles/Main";

export default class LogoTitle extends React.Component {
  render() {
    return <Image source={require("../assets/menu.png")} style={{width: 20, height: 20, marginHorizontal: 12}} onPress={() => this.props.navigation.toggleDrawer()} />;
  }
}
