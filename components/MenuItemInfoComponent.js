import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { Card } from "react-native-elements";
import { connect } from "react-redux";
import { postCart } from "../redux/ActionCreators";
import { baseUrl } from "../shared/baseUrl";

const mapStateToProps = (state) => {
  return {
    pizzas: state.pizzas,
    breads: state.breads,
    beverages: state.beverages,
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  postCart: (menuItemId) => postCart(menuItemId),
};

function RenderMenuItem({ menuItem }) {
  if (menuItem) {
    return (
      <Card
        featuredTitle={menuItem.name}
        image={{ uri: baseUrl + menuItem.image }}
      >
        <Text style={{ margin: 10 }}>{menuItem.description}</Text>
      </Card>
    );
  }
  return <View />;
}

class MenuItemInfo extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Food Information",
  };

  addToCart(menuItemId) {
    this.props.postCart(menuItemId);
  }

  render() {
    const menuItemId = this.props.route.params.menuItemId;
    const menuItem = this.props.pizzas.pizzas.filter(
      (menuItem) => menuItem.id === menuItemId
    )[0];
    return (
      <View>
        <RenderMenuItem menuItem={menuItem} />
        <Button
          title={"Add to Cart"}
          onPress={() => this.addToCart()}
          color="#708238"
        />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItemInfo);
