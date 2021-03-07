import React, { Component } from "react";
import { View, Text } from "react-native";
import { MENU } from "../shared/menu";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: MENU,
    };
  }

  static navigationOptions = {
    title: "Home",
  };

  render() {
    return (
      <View>
        <Text>This is a Test</Text>
      </View>
    );
  }
}

export default Home;
