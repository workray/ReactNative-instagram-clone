import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class AddMediaTab extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text>AddMediaTab</Text>
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