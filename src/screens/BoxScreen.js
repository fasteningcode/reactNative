import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BoxScreen = () => {
   return (
      <View style={styles.viewStyle}>
         <Text style={styles.textStyle}> Text Style 1</Text>
         <Text style={styles.textTwoStyle}> Text Style 2</Text>
         <Text style={styles.textThreeStyle}> Text Style 3</Text>
         {/* <Text style={styles.textStyle}> Text Style 4</Text>
         <Text style={styles.textTwoStyle}> Text Style 2</Text> */}
      </View>
   )
}

const styles = StyleSheet.create({
   viewStyle: {
      borderWidth: 3,
      borderColor: 'black',
      alignItems: 'stretch',
      // flexDirection: 'row',
      height: 200,
      // justifyContent: 'center'
   },
   textOneStyle: {
      borderWidth: 3,
      borderColor: 'red',
   },
   textTwoStyle: {
      borderWidth: 3,
      borderColor: 'red',
      fontSize: 18,
      position: 'absolute',
      // top: 0, bottom: 0, right: 0, left: 0
      ...StyleSheet.absoluteFillObject
   },
   textThreeStyle: {
      borderWidth: 3,
      borderColor: 'red',
   }
});

export default BoxScreen;