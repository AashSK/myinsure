import React from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


const HomeScreen = ({ navigation }) => {
    
    state = {
        data: [
            { id: "1", title: 'Meine Daten', icon: 'user-circle-o', screen: 'UserDetail' },
            { id: "2", title: 'Schadensfall Melden', icon: 'bolt', screen: 'FilingCase' },
            { id: "3", title: 'Rechnung einsehen', icon: 'file-text-o', screen: 'UserDetail' },
            { id: "4", title: 'Verträge verwalten', icon: 'pencil-square', screen: 'UserDetail' },
        ]
    };

    return (
        <View style={styles.container} >
            <FlatList
                numColumns={2}
                data={state.data}
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
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 120,
        height: 120,
        backgroundColor: '#57B8FF',
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
    },


})

export default HomeScreen;
