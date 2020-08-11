import React, { Component } from 'react'
import { createDrawerNavigator } from "react-navigation-drawer"
import { createNavigationContainer } from 'react-navigation'
import AppStackNavigator from './AppStackNavigator'
import InfoStackNavigator from './InfoStackNavigator'
import InfoScreen from '../screens/InfoScreen'
import Logout from '../screens/Logout'

const DrawerNavigator = createDrawerNavigator({
    Startseite: AppStackNavigator,
    Impressum: InfoStackNavigator,
    Logout:{
        screen: Logout, 
        navigationOptions: {
            title: 'Logout'
        },
    }
}, {
    initialRouteName: 'Startseite',
})

const AppNavigationContainer = createNavigationContainer(DrawerNavigator);

const AppDrawerNavigator = () => {
    return <AppNavigationContainer />;
}

export default AppDrawerNavigator