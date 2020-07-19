import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'


const Infoscreen = ({ navigation }) => {
 // No Header displayed to display header create new Stacknavigtor

    return (
        <View style={styles.container}>
            <Text> Info Screen </Text>
            <Button title="Home" onPress={() =>
                navigation.navigate('Startseite')
            } />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Infoscreen;
