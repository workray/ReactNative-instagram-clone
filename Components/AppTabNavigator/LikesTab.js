import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class LikesTab extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text>LikesTab</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});