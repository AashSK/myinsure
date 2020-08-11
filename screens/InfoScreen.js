import React, { Component } from 'react'
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


const InfoScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text> Information Screen </Text>
        </View>
    )
}

InfoScreen.navigationOptions = ({ screenProps }) => ({
    headerLeft: (
        <TouchableOpacity onPress={() => { screenProps.openDrawer() }} >
            <Icon style={{ color: '#fff', marginLeft: 20 }} name="navicon" size={24} />
        </TouchableOpacity>
    ),
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default InfoScreen
