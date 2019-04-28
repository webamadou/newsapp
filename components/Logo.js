import React from "react";
import { Image } from "react-native";
import Styles from "../styles/Main";

export default class LogoTitle extends React.Component {
  render() {
    return <Image source={require("../assets/logo.png")} style={Styles.logo} />;
  }
}
