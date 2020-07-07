import React from 'react'
import { View, Text } from 'react-native'
import { oauth } from 'react-native-force';

const Logout = () => {

    oauth.logout();

    return (
        <View>
            <Text>
                Logout Successfull
            </Text>
        </View>
    )
}

export default Logout
