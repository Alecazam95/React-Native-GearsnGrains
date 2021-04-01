import React, { Component } from "react";
import { FlatList, View, Text } from "react-native";
import { ListItem } from "react-native-elements";
import { connect } from "react-redux";
import Loading from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { deleteCart } from "../redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    pizzas: state.pizzas,
    breads: state.breads,
    beverages: state.beverages,
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  removeCartItem: (menuItemId) => removeCartItem(menuItemId),
};

class Cart extends Component {
  static navigationOptions = {
    title: "Cart",
  };

  render() {
    const renderCartItem = ({ item }) => {
      return (
        <View>
          <ListItem
            title={item.name}
            subtitle={item.description}
            leftAvatar={{ source: { uri: baseUrl + item.image } }}
          />
        </View>
      );
    };

    if (this.props.pizzas.isLoading) {
      return <Loading />;
    }
    if (this.props.pizzas.errMess) {
      return (
        <View>
          <Text>{this.props.pizzas.errMess}</Text>
        </View>
      );
    }

    return (
      <View>
        <FlatList
          data={this.props.pizzas.pizzas.filter((menuItem) =>
            this.props.cart.includes(menuItem.id)
          )}
          renderItem={renderCartItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
