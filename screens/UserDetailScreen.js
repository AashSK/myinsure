import React, { Component } from 'react'
import { Text, View, Button, StyleSheet, SectionList, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const person = {
    name: 'John Doe'
}
const List = [
    { title: 'Name', data: [{ id: 1, data: person.name }] },
    { title: 'Geburtsdatum', data: [{ id: 2, data: '10.9.1989' }] },
    { title: 'E-Mail', data: [{ id: 3, data: 'johndoe@myinsure.com' }] },
    { title: 'Telefonnummer', data: [{ id: 4, data: '01767748858' }] },
    { title: 'Adresse', data: [{ id: 5, data: 'Musterstraße 1 Hamburg' }] }
]

class UserDetailScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.listContainer}>
                    <Icon style ={styles.usericon} name='user-o' size={40} />
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
                    <TouchableOpacity style={styles.btn} onPress ={()=>this.props.navigation.navigate('EditUserDetail')}>
                        <Text style={styles.btnText}>Editieren
                    <Icon name='edit' size={20} />
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30,
    },
    usericon:{
        paddingBottom: 20,
    },
    listContainer: {
        height: 'auto',
        width: '100%',
        alignItems: 'center',
        paddingBottom:50
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f0eff3',
    },
    itemText: {
        fontSize: 14,
    },
    itemHeaderText: {
        fontSize: 18,
        padding: 10,
        fontWeight: 'bold',
    },
    btn: {
        backgroundColor: '#57B8FF',
        borderRadius: 5,
        padding: 10,
        margin: 20,
        alignSelf: 'center'
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
    }

})

export default UserDetailScreen
