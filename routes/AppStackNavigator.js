import React, { Component } from 'react';
import { createStackNavigator, createNavigationContainer } from "react-navigation";
import UserDetailScreen from '../screens/UserDetailScreen';
import HomeScreen from '../screens/HomeScreen';
import EditUserDetail from '../screens/EditUserDetail';
import FilingCaseScreen from '../screens/FilingCaseScreen';
import FilingCaseWeb from '../screens/FilingCaseWeb';
import ViewContractsScreen from '../screens/ViewContractsScreen';
import ViewInvoiceScreen from '../screens/ViewInvoiceScreen';


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
            title: 'Persönliche Daten'
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
    },
    FilingCaseWeb: {
        screen: FilingCaseWeb,
        navigationOptions: {
            title: 'Schaden Melden'
        }
    },
    ContractView:{
        screen: ViewContractsScreen,
        navigationOptions: {
            title:'Meine Verträge'
        }
    },
    InvoiceView:{
        screen: ViewInvoiceScreen,
        navigationOptions: {
            title:'Meine Rechnungen'
        }
    }
}, {
    initialRouteName: 'Startseite',
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

});

const AppNavigationContainer = createNavigationContainer(StackNavigator);
const AppStackNavigator = ({ navigation }) => {

    return <AppNavigationContainer
        screenProps={{ openDrawer: () => navigation.openDrawer() }}
    />
}

export default AppStackNavigator