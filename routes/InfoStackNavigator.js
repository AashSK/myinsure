import React from 'react';
import { createStackNavigator, createNavigationContainer } from "react-navigation";
import { View } from 'react-native'
import Infoscreen from '../screens/InfoScreen';



const StackNavigator = createStackNavigator(

    {
        Impressum: {
            screen: Infoscreen,
            navigationOptions: {
                title: 'Impressum',
            }
        },
    },
    {
        initialRouteName: 'Impressum',
        navigationOptions: {
            headerStyle: {
                height: 60,
                backgroundColor: '#002c6d',
            },
            headerTitleStyle: {
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white',
            },
            headerTintColor: '#fff',
        }

    }
);

const AppNavigationContainer = createNavigationContainer(StackNavigator);

const InfoStackNavigator = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <AppNavigationContainer screenProps={{ openDrawer: () => navigation.openDrawer() }} />
        </View>
    );
}

export default InfoStackNavigator

