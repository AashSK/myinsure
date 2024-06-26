import React from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


const HomeScreen = ({ navigation }) => {

    const screenInfo = {
        data: [
            { id: "1", title: 'Persönliche Daten', icon: 'user-circle-o', screen: 'UserDetail' },
            { id: "4", title: 'Verträge', icon: 'pencil-square', screen: 'ContractView' },
            { id: "3", title: 'Rechnungen', icon: 'file-text-o', screen: 'InvoiceView' },
            { id: "2", title: 'Schadensfall Melden', icon: 'bolt', screen: 'FilingCase' },
            { id: "5", title: 'Schaden (Web)', icon: 'bolt', screen: 'FilingCaseWeb' },
        ]
    };

    return (
        <View style={styles.container} >
            <FlatList
                numColumns={2}
                data={screenInfo.data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.iconlist} onPress={() => navigation.navigate(item.screen)
                        } >
                            <View style={styles.icon}>
                                <Icon style={{ color: '#fff' }} name={item.icon} size={60} />
                            </View>
                            <Text style={styles.title}>{item.title}</Text>
                        </TouchableOpacity>
                    )
                }} />
        </View>
    )
};

HomeScreen.navigationOptions = ({ screenProps }) => ({
    headerLeft: (
        <TouchableOpacity onPress={() => screenProps.openDrawer()} >
            <Icon style={{ color: '#fff', marginLeft: 20 }} name="navicon" size={24} />
        </TouchableOpacity>
    ),
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconlist: {
        width: 180,
        height: 180,
        padding: 10,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 120,
        height: 120,
        backgroundColor: '#002c6d',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 120 / 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    title: {
        fontSize: 15,
        flex: 1,
        paddingTop: 10,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#002c6d'
    },


})

export default HomeScreen;
