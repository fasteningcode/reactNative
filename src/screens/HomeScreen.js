import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ComponentsScreen from "./ComponentsScreen";

const HomeScreen = ({ navigation }) => {
  // console.log(props);

  return (
    <View>
      <Text style={styles.text}>Hello World always give me a great start</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo" />

      <Button
        onPress={() => navigation.navigate('List')}
        title="Go to List"
      />
      <TouchableOpacity onPress={() => navigation.navigate("List")}>
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

