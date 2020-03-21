import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ComponentsScreen from "./ComponentsScreen";

const HomeScreen = (props) => {
  // console.log(props);

  return (
    <View>
      <Text style={styles.text}>Hello World always give me a great start</Text>
      <Button
        onPress={() => props.navigation.navigate("Components")}
        title="Go to Components Demo" />
      <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text>Go to list Demo</Text>
        <Text>Go to list Demo</Text>
        <Text>Go to list Demo</Text>
        <Text>Go to list Demo</Text>

      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

