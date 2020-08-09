import React, { useState, useEffect } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { WebView } from 'react-native-webview';
import * as auth from '../data/authData';
import * as acc from '../data/accData';

const FilingCaseWeb = () => {
    const [oauthData, setOauthData] = useState('');
    const [reqUrl, setReqUrl] = useState(null);

    useEffect(() => {

        async function getData() {
            const data = await auth.getAuthData();
            setOauthData(data);
            const URL = 'https://inrelation-developer-edition.na57.force.com/myinsure/secur/frontdoor.jsp';
            const SID = `${data.userId.slice(4)}${data.orgId.slice(4,15)}`;
            const ACCESS_TOKEN = data.accessToken;
            const R_URL = '/myinsure/s/contactsupport';
            const authUrl = `${URL}?allp=1&apv=1&cshc=${SID}&refURL=${URL}&retURL=${R_URL}&sid=${ACCESS_TOKEN}`;
            setReqUrl(authUrl);
        }
        getData();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            {reqUrl && (
                <WebView
                    source={{
                        uri: reqUrl
                    }}
                    javaScriptEnabled
                    startInLoadingState
                />
            )}
        </View>
    )
}

export default FilingCaseWeb
