import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import * as data from '../data/userData'

const ViewContractsScreen = () => {

    useEffect(() => {
        data.getDetails(data.getContractData).then(data => {
            console.log(data);
        })
    }, []);

    return (
        <View>
            <Text>Contracts</Text>
        </View>
    )
}

export default ViewContractsScreen
