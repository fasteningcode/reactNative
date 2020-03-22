import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BoxScreen = () => {
   return (
      <View style={styles.viewParentStyle}>
         <View style={styles.viewOneStyle} />
         <View style={styles.viewTwoStyle} />
         <View style={styles.viewThreeStyle} />

      </View>
   )
}

const styles = StyleSheet.create({
   viewParentStyle: {
      borderWidth: 3,
      borderColor: 'black',
      alignItems: 'stretch',
      flexDirection: 'row',
      height: 200,
      justifyContent: 'space-between'
   },
   viewOneStyle: {
      height: 50, width: 50,
      backgroundColor: 'red'

   },
   viewTwoStyle: {
      height: 50, width: 50,
      backgroundColor: 'green',
      // marginTop: 50
      alignSelf: 'flex-end'
   },
   viewThreeStyle: {
      height: 50, width: 50,
      backgroundColor: 'purple'
   }
});

export default BoxScreen;