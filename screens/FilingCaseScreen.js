import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Image, TouchableOpacity, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


const FilingCaseScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.items}  >
                <Text style={styles.title}>Beschreibung: </Text>
                <TextInput style={styles.input} multiline={true} />

                <View style={{ flexDirection: 'row', marginBottom:20 }} >

                    <Icon style={{ margin: 5 }} name='camera' size={30} />
                    <Icon style={{ margin: 5 }} name='plus-square' size={30} />
                </View>

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText} onPress={() => alert('This function will be avaiable soon!')}>Speichern</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default FilingCaseScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f5f6',
    },
    items: {
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 15,
        paddingTop: 20,
        paddingBottom: 20,
        fontWeight: 'bold',
        color: '#002c6d'
    },
    input: {
        borderColor: '#d9d9d9',
        borderWidth: 1,
        width: '90%',
        height: 100,
        marginBottom:20,

    },

    btn: {
        backgroundColor: '#002c6d',
        borderRadius: 5,
        alignSelf: 'center',
        padding: 10,
        marginBottom: 20,
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }
});