import React, { Component } from 'react';
import { createStackNavigator, createNavigationContainer } from "react-navigation";
import UserDetailScreen from '../screens/UserDetailScreen';
import HomeScreen from '../screens/HomeScreen';




const StackNavigator = createStackNavigator({
    Startseite: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Startseite',
        }
        /* navigationOptions: {
             headerTitle: () => <CustomHeader title = 'Home' />,
 
             title: 'Home',
             headerTintColor: '#FFFFFF',
             headerStyle: {
                 backgroundColor: '#30C5FF', 
                 height: 60,
             },
             headerTitleStyle: {
                 fontSize:25,
                 fontWeight: 'bold',
               },
         }*/
    }
    ,
    UserDetail: {
        screen: UserDetailScreen,
        navigationOptions: {
            title: 'Meine Daten'
        }
    },
}, {
    initialRouteName: 'Startseite',
    navigationOptions: {
        headerStyle: {
            height: 60,
            backgroundColor: '#57B8FF',
        },
        headerTitleStyle: {
            fontSize: 22,
            fontWeight: 'bold',
            color: 'white',
        },
        headerTintColor: '#fff',
    }

});

const AppNavigationContainer = createNavigationContainer(StackNavigator);
export default class AppStackNavigator extends Component {
    render() {
        return <AppNavigationContainer
            screenProps={{ openDrawer: () => this.props.navigation.openDrawer() }}
        />
    }
}