import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () => {
    const friends = [
        { name: 'friend #1' },
        { name: 'friend #2' },
        { name: 'friend #3' },
        { name: 'friend #4' },
        { name: 'friend #5' },
        { name: 'friend #6' },
        { name: 'friend #7' },
        { name: 'friend #8' },
        { name: 'friend #9' },
        { name: 'friend #10' },
        { name: 'friend #11' },
        { name: 'friend #12' },
    ]

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={style.textStyle}>{item.name}</Text>;
            }}
        />
    );
}

const style = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;