import "react-native-gesture-handler";
import React from "react";
import Main from "./components/MainComponent";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
import { NavigationContainer } from "@react-navigation/native";

const store = ConfigureStore();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Main />
      </Provider>
    </NavigationContainer>
  );
}
