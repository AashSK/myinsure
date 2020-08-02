import { oauth, net } from 'react-native-force';
export let getAuthData = () => new Promise((resolve, reject) => {
    oauth.getAuthCredentials(
        (res) => {
            resolve(res);
        },
        (error) => {
            reject(alert('Failed to load AccountID, Please check your Internet Connection'));
        }
    )
});
