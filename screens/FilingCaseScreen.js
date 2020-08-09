import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Image, TouchableOpacity, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ImagePicker from 'react-native-image-picker'
import * as fileCase from '../data/fileCase'
import * as accData from '../data/accData'
import * as authData from '../data/authData'


const FilingCaseScreen = ({ navigation }) => {

    const [photo, setPhoto] = useState({ src: { uri: '' } });
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const [success, setSuccess] = useState(false);
    const [userData, setUserData] = useState('');
    let caseData = {};

    useEffect(() => {
        async function getData() {
            let authInfo = await authData.getAuthData();
            let data = await accData.getAccountData(authInfo);
            setUserData(data);
        }
        getData();
    }, []);

    hadleChoosePhoto = () => {
        const options = {
            noData: true
        };
        ImagePicker.launchImageLibrary(options, (response) => {
            console.log('Response:', response);
            if (response.didCancel) {
                console.log('User Cancelled');
            } else if (response.error) {
                console.log('Error Occured', response.error);
            } else {
                let src = { uri: response.uri }
                setPhoto({ src })
                console.log(src);
            }
        })
    }

    async function changeData() {

        if (!subject && !description) {
            alert('Bitte alle Felder ausfüllen!');
        } else {
            Object.assign(caseData, {
                "Subject": subject,
                "Description": description,
                "Origin": "Mobile App",
                "Reason": "Schadensmeldung"
                // File params expected to be of the form: 
                //{<fileParamNameInPost>: 
                //{fileMimeType:<someMimeType>, fileUrl:<fileUrl>, fileName:<fileNameForPost>}}
                
            })
            fileCase.updateCaseData(caseData).then(() => {
                setSuccess(true);
                setTimeout(() => setSuccess(false), 3000);
                setSubject('');
                setDescription('');
            }
            )
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.items}  >
                <Text style={styles.title}>Anlass: </Text>
                <TextInput
                    style={styles.subject}
                    placeholder={'Unfall'}
                    value={subject}
                    onChangeText={(val) => { setSubject(val) }} />
                <Text style={styles.title}>Beschreibung: </Text>
                <TextInput
                    style={styles.description}
                    placeholder={'Unfall innenstadt Dortmund!'}
                    multiline={true}
                    value={description}
                    onChangeText={(val) => { setDescription(val) }} />
                {photo.src.uri !== '' && (<Image
                    source={{ uri: photo.src.uri }}
                    style={{ marginBottom: 20, width: 150, height: 150 }}
                />
                )}
                {/* <View style={{ flexDirection: 'row', marginBottom: 20 }} >
                    <TouchableOpacity onPress={() => hadleChoosePhoto()}>
                        <Icon style={{ margin: 5 }} name='camera' size={30} />
                    </TouchableOpacity>

                    <Icon style={{ margin: 5 }} name='plus-square' size={30} />
                </View> */}

                {success && (<View style={styles.success}><Text style={styles.successTxt}>Änderung erfolgreich</Text></View>)}

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText} onPress={() => changeData()}>Speichern</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default FilingCaseScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f5f6',
    },
    items: {
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 15,
        paddingTop: 20,
        paddingBottom: 20,
        fontWeight: 'bold',
        color: '#002c6d'
    },
    subject: {
        borderColor: '#d9d9d9',
        borderBottomWidth: 1,
        padding: 10,
        width: '100%',
        marginBottom: 10,
    },
    description: {
        borderColor: '#d9d9d9',
        borderBottomWidth: 1,
        padding: 10,
        width: '100%',
        marginBottom: 20
    },
    btn: {
        backgroundColor: '#002c6d',
        borderRadius: 5,
        alignSelf: 'center',
        padding: 10,
        marginBottom: 20,
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
        margin:10
    },
    successTxt:{
        fontSize: 18,
        fontWeight: 'bold',
    }
});