import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () => {
    const friends = [
        { name: 'friend #1', age: 20 },
        { name: 'friend #2', age: 43 },
        { name: 'friend #3', age: 34 },
        { name: 'friend #4', age: 35 },
        { name: 'friend #5', age: 46 },
        { name: 'friend #6', age: 34 },
        { name: 'friend #7', age: 20 },
        { name: 'friend #8', age: 20 },
        { name: 'friend #9', age: 20 },
        { name: 'friend #10', age: 20 },
        { name: 'friend #11', age: 20 },
        { name: 'friend #12', age: 20 },
    ]

    return (
        <FlatList
            // keyExtractor={(friend) => friend.name}
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return (
                    <Text style={style.textStyle}>
                        {item.name} - Age ¬{item.age}
                    </Text>
                )
            }}
        />
    )
}

const style = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})

export default ListScreen;