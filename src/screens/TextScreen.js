import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {
   const [name, setName] = useState('')
   return (
      <View>
         <Text>Enter Name : </Text>
         <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={(newValue) => {
               setName(newValue)
            }}
         />
         <Text>My name is {name}</Text>
         {name.length >= 5 ?
            <Text>Name Should be less than 5 character</Text> : null}
      </View>
   )
};

const styles = StyleSheet.create({
   input: {
      margin: 15,
      borderColor: 'grey',
      borderWidth: 1
   }
});

export default TextScreen;