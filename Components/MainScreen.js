import React, { Component } from 'react';
import { StyleSheet, Platform } from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View style={StyleSheet.container}>
                <Text>MainScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alginItems: 'center',
        justifyContent: 'center',
    },
});