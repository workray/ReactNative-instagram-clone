import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text } from 'react-native';
import { Icon } from 'native-base';

export default class App extends Component {
    // navigationOptions
    static navigationOptions = {
        headerLeft: <Icon name='ios-camera' style={{ paddingLeft: 10 }}/>,
        title: 'Instagram',
        headerRight: <Icon name='ios-send' style={{ paddingRight: 10 }}/>,
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>MainScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});