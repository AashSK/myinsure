import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import * as data from '../data/userData'
import Icon from 'react-native-vector-icons/FontAwesome'

const ViewContractsScreen = () => {

    const [contracts, setContracts] = useState('');

    useEffect(() => {
        data.getDetails(data.getContractData).then(data => {
            data.forEach(data => {
                data.show = false;
            })
            setContracts(data);
        })
    }, []);

    return (
        <View style={styles.container}>

            <FlatList
                data={contracts}
                keyExtractor={(item) => item.Id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => {
                            let copy = [...contracts];
                            copy.forEach(data => {
                                data.Id === item.Id ? data.show = !data.show : data.show = data.show
                            })
                            setContracts(copy);
                        }} >
                            <View style={styles.item}>
                                <View style={styles.itemContainer}>
                                    <View style={{ flex: 1, flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Text style={styles.itemHeader} >{item.FinServ__RecordTypeName__c}</Text>
                                        {!item.show && (<Icon style={{ paddingRight: 10 }} name="chevron-down" size={18} />)}
                                    </View>
                                    {item.show && (
                                        <View>
                                            <Text style={styles.text}>Versicherungsscheinnummer: {item.ad_Versicherungsscheinnummer__c}</Text>
                                            <Text style={styles.text}>Vertragsstatus: {item.ad_Vertragsstatus__c}</Text>
                                            {item.ad_Tarif__c && (
                                                <Text style={styles.text}>Tarif: {item.ad_Tarif__c}</Text>
                                            )}
                                            <View>
                                                {item.FinServ__OpenDate__c && (
                                                    <Text style={styles.text}>Vertragsbeginn: {`${new Date(item.FinServ__OpenDate__c).toDateString()}`}</Text>
                                                )}
                                                {item.FinServ__CloseDate__c && (
                                                    <Text style={styles.text}>Vertragsende: {`${new Date(item.FinServ__CloseDate__c).toDateString()}`}</Text>
                                                )}
                                                <Text style={styles.text}>Zahlungsart: {item.ad_Zahlungsart__c}</Text>
                                            </View>
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
        marginBottom: 10
    },
    itemHeader: {
        fontSize: 15,
        padding: 10,
        fontWeight: 'bold',
        color: '#002c6d',
    },
    text: {
        padding: 10,
        margin: 5
    }

}
)

export default ViewContractsScreen
