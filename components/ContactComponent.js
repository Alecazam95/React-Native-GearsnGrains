import React, { Component } from "react";
import { ScrollView, Text } from "react-native";
import { Card } from "react-native-elements";

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Contact Us",
  };

  render() {
    return (
      <ScrollView>
        <Card wrapperStyle={{ margin: 20 }} title={"Contact Information"}>
          <Text>Phone: 1-303-555-1234</Text>
          <Text style={{ marginBottom: 10 }}>Email: breads@GnG.com</Text>
          <Text>Instagram: Gears & Grains</Text>
          <Text>Twitter: @Gears&Grains</Text>
          <Text>Facebook: Gears & Grains</Text>
        </Card>
      </ScrollView>
    );
  }
}

export default Contact;
