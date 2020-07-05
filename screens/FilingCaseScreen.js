import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Image, TouchableOpacity, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


const FilingCaseScreen = ({navigation}) => {
    return (

        <View style={styles.container}>
            <View style={{ marginTop:50, alignItems: 'center' }} >
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Beschreibung: </Text>
                <TextInput
                    style={{
                        borderColor: 'grey',
                        borderWidth: 1, height: 200, margin: 20, padding: 10, width: 300
                    }} multiline={true} />

                <View style={{ flexDirection: 'row', alignContent: 'space-between' }} >

                    <Icon style={{ margin: 5 }} name='camera' size={40} />
                    <Icon style={{ margin: 5 }} name='plus-square' size={40} />
                    <Icon style={{ margin: 5 }} name='plus-square' size={40} />
                    <Icon style={{ margin: 5 }} name='plus-square' size={40} />
                    <Icon style={{ margin: 5 }} name='plus-square' size={40} />
                    <Icon style={{ margin: 5 }} name='plus-square' size={40} />

                </View>

                <TouchableOpacity><Text style={[styles.button]} onPress={() => alert('This function will be avaiable soon!')}> Save</Text></TouchableOpacity>
            </View>

        </View>

    )

}

export default FilingCaseScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between'

    },
    head: {
        alignItems: 'center',

    },
    case: {
        marginTop: 20,
        flexDirection: 'column',
        alignItems: 'center',

    },
    title: {
        color: '#57B8FF',
        fontSize: 20,
        fontWeight: 'bold',
    },

    input: {
        borderColor: 'grey',
        borderWidth: 1,
        width: 200,
        padding: 8,
        margin: 10

    },

    button: {
        backgroundColor: '#57B8FF',
        color: '#fff',
        fontSize: 20,
        padding: 15,
        width: "50%",
        marginBottom: 50
    },
});