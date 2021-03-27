import React, { Component } from "react";
import { View, Button } from "react-native";
import { Image } from "react-native-elements";

class Home extends Component {
  static navigationOptions = {
    title: "Home",
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Image
          source={require("./images/jumbo-bread-logo.jpg")}
          style={{ width: 400, height: 500, marginBottom: 120 }}
        />
        <Button
          title={"Try our new Hawaiian pizza!"}
          onPress={() => navigate("Menu")}
          color="#708238"
        />
      </View>
    );
  }
}

export default Home;
