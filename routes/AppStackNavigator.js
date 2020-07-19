import React, { Component } from 'react';
import { createStackNavigator, createNavigationContainer } from "react-navigation";
import UserDetailScreen from '../screens/UserDetailScreen';
import HomeScreen from '../screens/HomeScreen';
import EditUserDetail from '../screens/EditUserDetail';
import FilingCaseScreen from '../screens/FilingCaseScreen';


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
    EditUserDetail: {
        screen: EditUserDetail,
        navigationOptions: {
            title: 'Daten bearbeiten'
        }
    },
    FilingCase: {
        screen: FilingCaseScreen,
        navigationOptions: {
            title: 'Schaden Melden'
        }
    }
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
const AppStackNavigator = ({ navigation }) => {

    return <AppNavigationContainer
        screenProps={{ openDrawer: () => navigation.openDrawer() }}
    />
}

export default AppStackNavigator