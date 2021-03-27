import React, { Component } from "react";
import { View, Platform } from "react-native";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import Cart from "./CartComponent";
import Contact from "./ContactComponent";
import { connect } from "react-redux";
import {
  fetchPizzas,
  fetchBreads,
  fetchBeverages,
  fetchMenu,
} from "../redux/ActionCreators";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createStackNavigator } from "@react-navigation/stack";
import MenuItemInfo from "./MenuItemInfoComponent";

const mapDispatchToProps = {
  fetchPizzas,
  fetchBreads,
  fetchBeverages,
  fetchMenu,
};

const Stack = createStackNavigator();

const MenuItemStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="MenuItemInfo" component={MenuItemInfo} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={"grey"} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuItemStackNavigator}
        options={{
          tabBarLabel: "Menu",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="food-croissant"
              color={"grey"}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Contact Us"
        component={Contact}
        options={{
          tabBarLabel: "Contact Us",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="phone" color={"grey"} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={"grey"} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

class Main extends Component {
  componentDidMount() {
    this.props.fetchPizzas();
    this.props.fetchBreads();
    this.props.fetchBeverages();
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop:
            Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight,
        }}
      >
        <MyTabs />
      </View>
    );
  }
}

export default connect(null, mapDispatchToProps)(Main);
