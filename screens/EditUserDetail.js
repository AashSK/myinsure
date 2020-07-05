import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import { useState } from 'react'



const EditUserDetail = ({ navigation }) => {

    const [street, setStreet] = useState('');
    const [postCode, setPCode] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    return (

        <View style={styles.container}>

            <View style={styles.items}>

                <Text style={styles.label}>Street: </Text>
                <TextInput style={styles.input}
                    placeholder='Max-Muster Str. 10'
                    onChangeText={(val) => setStreet(val)} />

                <Text style={styles.label}>Post Code: </Text>
                <TextInput style={styles.input}
                    placeholder='44134'
                    onChangeText={(val) => setPCode(val)} />
                <Text>{postCode}</Text>

                <Text style={styles.label}>Email: </Text>
                <TextInput style={styles.input}
                    placeholder='muster@myinsure.com'
                    onChangeText={(val) => setEmail(val)} />

                <Text style={styles.label}>Mobile: </Text>
                <TextInput style={styles.input}
                    placeholder='+49 *******'
                    onChangeText={(val) => setMobile(val)} />

                <TouchableOpacity style={styles.btn} onPress={() => alert('This function will be avaiable soon!')}>
                    <Text style={styles.btnText}>Save</Text>
                </TouchableOpacity>

            </View>
        </View>

    )
}

export default EditUserDetail
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30,
    },
    items: {
        height: 'auto',
        width: '100%',
        alignItems: 'center',
        paddingBottom: 50

    },
    label:{
        fontSize: 18,
        padding: 10,
        fontWeight: 'bold',
    },
    input: {
        borderColor: '#A8A7AA',
        borderWidth: 1,
        width: 200,
        padding: 8,
        margin: 10,
        borderRadius: 5,
    },
    btn: {
        backgroundColor: '#57B8FF',
        borderRadius: 5,
        alignSelf: 'center',
        padding: 10,
        margin:20,
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
    },
});