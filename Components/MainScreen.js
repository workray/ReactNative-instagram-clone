import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text } from 'react-native';
import { Icon } from 'native-base';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

import HomeTab from './AppTabNavigator/HomeTab';
import SearchTab from './AppTabNavigator/SearchTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfileTab from './AppTabNavigator/ProfileTab';

const AppTabNavigator = createMaterialTopTabNavigator({
    HomeTab: { screen: HomeTab },
    SearchTab: { screen: SearchTab },
    AddMediaTab: { screen: AddMediaTab },
    LikesTab: { screen: LikesTab },
    ProfileTab: { screen: ProfileTab }
}, {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
        style: {
            ...Platform.select({
                iso: {
                    backgroundColor: 'white',
                }
            })
        },
        iconStyle: { height: 100 },
        activeTintColor: '#000',
        inactiveTintColor: '#d1c3c3',
        upperCaseLabel: false,
        showLabel: false,
        showIcon: true,
    }
});

const AppTabContainer = createAppContainer(AppTabNavigator)

export default class App extends Component {
    // navigationOptions
    static navigationOptions = {
        headerLeft: <Icon name='ios-camera' style={{ paddingLeft: 10 }}/>,
        title: 'Instagram',
        headerRight: <Icon name='ios-send' style={{ paddingRight: 10 }}/>,
    }

    render() {
        return <AppTabContainer/>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});