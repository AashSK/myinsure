import React, { useState, useEffect } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { WebView } from 'react-native-webview';
import * as auth from '../data/authData';

const FilingCaseWeb = () => {
    const [ouathData, setOauthData] = useState('');

    useEffect(() => {
        async function getData() {
            const data = await auth.getAuthData();
            setOauthData(data);
        }
        getData();
    }, []);


    console.log(ouathData);

    const AUTHORIZATION_URL = 'https://inrelation-developer-edition.na57.force.com/myinsure/s/contactsupport';
    const RESPONSE_TYPE = 'code';
    const RESPONSE_MODE = 'form_post';
    const CLIENT_ID = ouathData.clientId;
    const ACCESS_TOKEN = ouathData.accessToken;
    const REFRESH_TOKEN = ouathData.refreshToken;
    const CALLBACK = encodeURIComponent('testsfdc:///mobilesdk/detect/oauth/done');
    const authUrl = `${AUTHORIZATION_URL}/auth?response_type=${RESPONSE_TYPE}&response_mode=${RESPONSE_MODE}&client_id=${CLIENT_ID}&access_token=${ACCESS_TOKEN}&refresh_token=${REFRESH_TOKEN}&redirect_uri=${CALLBACK}`;

    return (
        <WebView
            source={{ uri: authUrl }}
        />
    )
}

export default FilingCaseWeb
