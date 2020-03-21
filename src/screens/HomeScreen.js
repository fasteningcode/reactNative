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
      <Button
        onPress={() => navigation.navigate('Image')}
        title="Go to Image"
      />

      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Counter Screen" />
      {/* <TouchableOpacity onPress={() => navigation.navigate("Image")}>
        <Text>Image Screen</Text>
      </TouchableOpacity> */}
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

