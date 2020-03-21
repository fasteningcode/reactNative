import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


const ComponentsScreen = () => {
    const greeting = ['123', '232'];
    const name = 'Aadhi';

    return (
        <View>
            <Text style={styles.headerStyle}>Getting Started with React Native !</Text>
            <Text style={styles.subHeaderStyle}>My Name is {name}</Text>
            {/* <Text>{greeting}</Text> */}

        </View>
        // return <Text style={{ fontSize: 30 }}>This is the ComponentsScreen</Text>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        // fontStyle: "italic"
    },
    subHeaderStyle: {
        fontSize: 20
    },
    headerStyle: {
        fontSize: 45
    }
});

export default ComponentsScreen;