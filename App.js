import React from "react";
import { StyleSheet,View } from "react-native";
import Header from "./cc/Header";
import AlbumList from "./cc/AlbumList";

const App = () => {
  return (
    <View>
      <Header />
      <AlbumList />
    </View>
  );
};


const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default App;