import React, { Component } from "react";
import { ListItem } from "react-native-elements";
import { connect } from "react-redux";
import { View, Text, FlatList, ScrollView, StyleSheet } from "react-native";
import { baseUrl } from "../shared/baseUrl";
import Loading from "./LoadingComponent";

const mapStateToProps = (state) => {
  return {
    pizzas: state.pizzas,
    breads: state.breads,
    beverages: state.beverages,
    menu: state.menu,
  };
};

class Menu extends Component {
  static navigationOptions = {
    title: "Menu",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderMenuItem = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          subtitle={item.description}
          onPress={() => navigate("MenuItemInfo", { menuItemId: item.id })}
          leftAvatar={{ source: { uri: baseUrl + item.image } }}
        />
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
    if (this.props.breads.isLoading) {
      return <Loading />;
    }
    if (this.props.breads.errMess) {
      return (
        <View>
          <Text>{this.props.breads.errMess}</Text>
        </View>
      );
    }
    if (this.props.beverages.isLoading) {
      return <Loading />;
    }
    if (this.props.beverages.errMess) {
      return (
        <View>
          <Text>{this.props.beverages.errMess}</Text>
        </View>
      );
    }

    return (
      <ScrollView>
        <Text style={styles.h1}>Pizzas</Text>
        <FlatList
          data={this.props.pizzas.pizzas.filter(
            (menuItem) => menuItem.type === "pizza"
          )}
          renderItem={renderMenuItem}
          keyExtractor={(item) => item.id}
        />
        <Text style={styles.h1}>Breads</Text>
        <FlatList
          data={this.props.breads.breads}
          renderItem={renderMenuItem}
          keyExtractor={(item) => item.id}
        />
        <Text style={styles.h1}>Drinks</Text>
        <FlatList
          data={this.props.beverages.beverages}
          renderItem={renderMenuItem}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  h1: {
    alignItems: "flex-end",
    justifyContent: "center",
    flex: 1,
    margin: 10,
    fontSize: 30,
  },
});

export default connect(mapStateToProps)(Menu);
