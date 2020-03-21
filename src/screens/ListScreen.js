import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () => {
    const friends = [
        { name: 'friend #1', key: '1' },
        { name: 'friend #2', key: '2' },
        { name: 'friend #3', key: '3' },
        { name: 'friend #4', key: '4' },
        { name: 'friend #5', key: '5' },
        { name: 'friend #6', key: '6' },

    ]

    return (
        <FlatList
            data={friends}
            renderItem={({ item }) => {
                return <Text>{item.name}</Text>;
            }}
        />
    );
}

const style = StyleSheet.create({});

export default ListScreen;