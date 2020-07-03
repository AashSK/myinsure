import React, { Component } from 'react'
import { createDrawerNavigator } from "react-navigation-drawer"
import { createNavigationContainer } from 'react-navigation'
import AppStackNavigator from './AppStackNavigator'
import InfoScreen from '../screens/InfoScreen'

const DrawerNavigator = createDrawerNavigator({
    Startseite: AppStackNavigator,
    Info: {
        screen: InfoScreen,
        navigationOptions: {
            title: 'Impressum'
        }
    }
}, {
    initialRouteName: 'Startseite',
})

const AppNavigationContainer = createNavigationContainer(DrawerNavigator);

const AppDrawerNavigator = () => {
    return <AppNavigationContainer />;
}

export default AppDrawerNavigator