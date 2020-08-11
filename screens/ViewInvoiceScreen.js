import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import * as data from '../data/userData'
import Icon from 'react-native-vector-icons/FontAwesome'

const ViewInvoiceScreen = () => {

    const [invoice, setInvoice] = useState('');

    useEffect(() => {
        data.getDetails(data.fetchBills).then(data => {
            data.forEach(data => {
                data.show = false;
            })
            data.sort((a, b) => b.FinServ__PaymentDueDate__c.localeCompare(a.FinServ__PaymentDueDate__c))
            setInvoice(data);
        })
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={invoice}

                keyExtractor={(item) => item.Id}

                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => {
                            let copy = [...invoice];
                            copy.forEach(data => {
                                data.Id === item.Id ? data.show = !data.show : data.show = data.show
                            })
                            setInvoice(copy);
                        }} >
                            <View style={styles.item}>
                                <View style={styles.itemContainer}>
                                    <View style={{ flex: 1, flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Text style={styles.itemHeader}>Rechnung von: {`${item.FinServ__StatementDate__c}`}</Text>
                                        {!item.show && (<Icon name="chevron-down" size={18} />)}
                                    </View>
                                    {item.show && (
                                        <View>
                                            <Text style={styles.text}>Rechnungnummer: {item.Name}</Text>
                                            <Text style={styles.text}>Vertrag: {item.Vertrag__c}</Text>
                                            <Text style={styles.text}>Beitrag: {item.FinServ__Payments__c} €</Text>
                                            <Text style={styles.text}>Fällig am: {item.FinServ__PaymentDueDate__c}</Text>
                                        </View>
                                    )}
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }} />

        </View>
    )
}

export default ViewInvoiceScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f3f5f6',
        paddingTop: 20,
    },
    item: {
        height: 'auto',
        width: '100%',
        backgroundColor: '#fff',
    },
    itemContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#d9d9d9',
        marginTop: 10,
        marginBottom: 10,
        padding: 10
    },
    itemHeader: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#002c6d',
    },
    text: {
        padding: 10,
        margin: 5
    }

}
)