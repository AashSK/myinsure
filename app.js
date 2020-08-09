import React from 'react';
import { View } from 'react-native';
import { oauth, net } from 'react-native-force';
import AppDrawerNavigator from './routes/AppDrawerNavigator'



export function App() {

    console.disableYellowBox = true;
    
    return (
        <View style={{ flex: 1 }}>
            <AppDrawerNavigator />
        </View>
    );

}
