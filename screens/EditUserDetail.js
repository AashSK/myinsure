import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import * as data from '../data/userData';

const EditUserDetail = ({ navigation }) => {

    const [personDetails, setPersonDetails] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [state, setState] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [success, setSuccess] = useState(false);

    let person = {};

    useEffect(() => {
        data.getDetails(data.editableData).then(data => {
            setPersonDetails(data);
        })
    }, []);

    changeData = () => {

        if (!city && !postalCode && !state && !street && !email && !phone) {
            alert('Pleas Complete all Fields!');
        } else {
            Object.assign(person, {
                "BillingCity": city ? city : personDetails.BillingCity,
                "BillingPostalCode": postalCode ? postalCode : personDetails.BillingPostalCode,
                "BillingState": state ? state : personDetails.BillingState,
                "BillingStreet": street ? street : personDetails.BillingStreet,
                "PersonEmail": email ? email : personDetails.PersonEmail,
                "PersonMobilePhone": phone ? phone : personDetails.PersonMobilePhone,
            })

            data.updateDetails(data.updateData, person).then(() => {
                setSuccess(true);
                setCity('');
                setStreet('');
                setState('');
                setPhone('');
                setPostalCode('');
                setPostalCode('');
                setTimeout(() => navigation.navigate('UserDetail'), 3000);
            }
            )
        }
    }

    return (

        <View style={styles.container}>
            <ScrollView>
                <View style={styles.items}>

                    <Text style={styles.label}>Kontaktadresse</Text>
                    <TextInput style={styles.input}
                        placeholder={`Straße: ${personDetails.BillingStreet}`}
                        value={street}
                        onChangeText={(val) => { setStreet(val) }} />

                    <TextInput style={styles.input}
                        keyboardType='numeric'
                        placeholder={`Postleitzahl: ${personDetails.BillingPostalCode}`}
                        value={postalCode}
                        onChangeText={(val) => { setPostalCode(val) }} />

                    <TextInput style={styles.input}
                        placeholder={`Stadt: ${personDetails.BillingCity}`}
                        value={city}
                        onChangeText={(val) => { setCity(val) }} />

                    <TextInput style={styles.input}
                        placeholder={`Bundesstaat: ${personDetails.BillingState}`}
                        value={state}
                        onChangeText={(val) => { setState(val) }} />

                    <Text style={styles.label}>E-Mail und Rufnummer</Text>
                    <TextInput style={styles.input}
                        placeholder={`E-mail: ${personDetails.PersonEmail}`}
                        value={email}
                        onChangeText={(val) => { setEmail(val) }} />

                    <TextInput style={styles.input}
                        keyboardType='phone-pad'
                        placeholder={`Telefonnummer: ${personDetails.PersonMobilePhone}`}
                        value={phone}
                        onChangeText={(val) => { setPhone(val) }} />
                    {success && (<View style={styles.success}><Text style={styles.successTxt}>Änderung erfolgreich</Text></View>)}
                    <TouchableOpacity style={styles.btn} onPress={() => {
                        changeData();
                    }}>
                        <Text style={styles.btnText}>Ändern</Text>

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
        backgroundColor: '#f3f5f6',
        paddingTop: 20,
    },
    label: {
        fontSize: 15,
        paddingLeft: 10,
        paddingBottom: 10,
        fontWeight: 'bold',
        color: '#002c6d'
    },
    items: {
        height: 'auto',
        width: '100%',
        backgroundColor: '#fff',
        paddingTop: 20,
        paddingBottom: 20,
    },
    input: {
        borderColor: '#d9d9d9',
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 20,
    },
    btn: {
        backgroundColor: '#002c6d',
        borderRadius: 5,
        alignSelf: 'center',
        padding: 10,
        margin: 10,
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    success:{
        backgroundColor: 'lightgreen',
        alignItems: 'center',
        padding: 5,
        margin:3
    },
    successTxt:{
        fontSize: 18,
        fontWeight: 'bold',
    }
});