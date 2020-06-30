import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Image, TouchableOpacity, TextInput } from 'react-native'
import { useState } from 'react'
import { HeaderTitle } from 'react-navigation';


const EditUserDetail = () => {

    const [street, setStreet] = useState('');
    const [postCode, setPCode] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    return (

        <View style={styles.container}>

            <View style={styles.case}>
                <View>
                    <Text>Street </Text>
                    <TextInput style={styles.input}
                        placeholder='Max-Muster Str. 10'
                        onChangeText={(val) => setStreet(val)} />
                    <Text>{street}</Text>
                </View>

                <View>
                    <Text>Post Code </Text>
                    <TextInput style={styles.input}
                        placeholder='44134'
                        onChangeText={(val) => setPCode(val)} />
                    <Text>{postCode}</Text>
                </View>

                <View>
                    <Text>Email: </Text>
                    <TextInput style={styles.input}
                        placeholder='muster@myinsure.com'
                        onChangeText={(val) => setEmail(val)} />
                    <Text>{email}</Text>
                </View>


                <View>
                    <Text>Mobile: </Text>
                    <TextInput style={styles.input}
                        placeholder='+49 *******'
                        onChangeText={(val) => setMobile(val)} />
                    <Text>{mobile}</Text>
                </View>

            </View>

            <View style={styles.head}>
                <TouchableOpacity><Text style={[styles.button]} onPress={()=> alert('This function will be avaiable soon!')}> Save</Text></TouchableOpacity>
            </View>
        </View>

    )
}

export default EditUserDetail
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:'space-between'

    },
    head: {
        alignItems: 'center',

    },
    case: {
        marginTop:20,
        flexDirection: 'column',
        alignItems: 'center',

    },
    title: {
        color: '#57B8FF',
        fontSize: 30,
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