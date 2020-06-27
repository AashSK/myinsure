import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'


class Infoscreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text> User Detail Screen </Text>
                <Button title="Home" onPress={() =>
                    this.props.navigation.navigate('Startseite')
                } />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Infoscreen
