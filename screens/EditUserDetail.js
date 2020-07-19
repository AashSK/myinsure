import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import * as data from '../data/data';



const EditUserDetail = ({ navigation }) => {

    const [personDetails, setPersonDetails] = useState('');
    const personCopy = { ...personDetails };

    useEffect(() => {
        data.getDetails(data.editableData).then(data => {
            setPersonDetails(data);
        })
        // data.getDetails(data.updateData)
    }, []);

    changeData = () => {
        console.log(personCopy.PersonMobilePhone);
        data.updateDetails(data.updateData, personCopy);
    }

    return (

        <View style={styles.container}>
            <ScrollView>
                <View style={styles.items}>

                    <TextInput style={styles.input}
                        textContentType='fullStreetAddress'
                        placeholder='Street'
                        onChangeText={(val) => { personCopy.BillingStreet = val }} />

                    <TextInput style={styles.input}
                        textContentType='addressCity'
                        placeholder='City'
                        onChangeText={(val) => { personCopy.BillingCity = val }} />

                    <TextInput style={styles.input}
                        keyboardType='numeric'
                        textContentType='postalCode'
                        placeholder='Postal Code'
                        onChangeText={(val) => { personCopy.BillingPostalCode = val }} />

                    <TextInput style={styles.input}
                        textContentType='addressState'
                        placeholder='State'
                        onChangeText={(val) => { personCopy.BillingState = val }} />

                    <TextInput style={styles.input}
                        textContentType='emailAddress'
                        placeholder='E-Mail address'
                        onChangeText={(val) => { personCopy.PersonEmail = val }} />

                    <TextInput style={styles.input}
                        keyboardType='phone-pad'
                        textContentType='telephoneNumber'
                        placeholder='Phone Number'
                        onChangeText={(val) => {
                            personCopy.PersonMobilePhone = val

                        }} />

                    <TouchableOpacity style={styles.btn} onPress={() => {
                        changeData()
                    }}>
                        <Text style={styles.btnText}>Save</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
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
    input: {
        borderColor: '#3b444b',
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
        margin: 20,
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
    },
});