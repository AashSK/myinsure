import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, SectionList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as data from '../data/userData';

const UserDetailScreen = ({ navigation }) => {

    const [personDetails, setPersonDetails] = useState({
        "BillingCity": "",
        "BillingPostalCode": "",
        "BillingState": "",
        "BillingStreet": "",
        "Name": "",
        "PersonBirthdate": "",
        "PersonEmail": "",
        "PersonMobilePhone": "",
    });
    const [addressString, setAddressString] = useState('');

    useEffect(() => {
        data.getDetails(data.fetchData).then(data => {
            setPersonDetails(data);
            setAddressString(`${data.BillingStreet}\n${data.BillingPostalCode} ${data.BillingCity}\n${data.BillingState}`);
        })
        data.getDetails(data.getContractData).then(data => {
            console.log(data);
        })
    }, []);
    
    const List = [
        { title: 'Name', data: [{ id: 1, data: `${personDetails.Name}` }] },
        { title: 'Geburtsdatum', data: [{ id: 2, data: `${personDetails.PersonBirthdate ? new Date(personDetails.PersonBirthdate).toDateString() : ''}` }] },
        { title: 'E-Mail', data: [{ id: 3, data: `${personDetails.PersonEmail}` }] },
        { title: 'Telefonnummer', data: [{ id: 4, data: `${personDetails.PersonMobilePhone}` }] },
        { title: 'Adresse', data: [{ id: 5, data: `${addressString}` }] }
    ];

    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                {/*<Icon style={styles.usericon} name='user-o' size={40} />*/}
                <SectionList
                    style={styles.itemList}
                    sections={List}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text style={styles.itemText} >{item.data}</Text>
                        </View>
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <View style={styles.itemHeader}>
                            <Text style={styles.itemHeaderText}>{title}</Text>
                        </View>
                    )
                    }
                />
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('EditUserDetail')}>
                    <Text style={styles.btnText}>Editieren
                    <Icon name='edit' style={styles.btnIcon} size={20} />
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f5f6',
        paddingTop: 20,
    },
    listContainer: {
        height: 'auto',
        width: '100%',
        paddingBottom: 10,
        paddingTop: 20,
        backgroundColor: '#fff' 
    },
    item: {
        borderBottomWidth: 1,
        borderBottomColor: '#d9d9d9',
        paddingLeft: 10,
        marginBottom: 20,
    },
    itemText: {
        fontSize: 14,
        padding: 10,
    },
    itemHeader:{
        paddingLeft: 10
    },
    itemHeaderText: {
        fontSize: 15,
        padding: 10,
        fontWeight: 'bold',
        color: '#002c6d'
    },
    btn: {
        backgroundColor: '#002c6d',
        borderRadius: 5,
        padding: 10,
        margin: 20,
        alignSelf: 'center'
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    btnIcon:{
        fontWeight: 'bold',
        marginLeft: 10
    }
})

export default UserDetailScreen;
