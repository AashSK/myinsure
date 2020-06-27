import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const CustomHeader = ({title}) => {
    return (
        <View style = {styles.header}>
            <TouchableOpacity >
            <Icon name = "navicon" size={20}/>
            </TouchableOpacity>
            <View>
                <Text style = {styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText:{
        fontWeight:'bold',
        fontSize:20,
        color: 'black',
        
    }
})