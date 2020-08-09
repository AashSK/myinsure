import { oauth, net } from 'react-native-force';
export let getAccountData = (response) => new Promise((resolve, reject) => {
    // funtion to query person Account Info
    
    net.query(`SELECT AccountId FROM User WHERE Id = '${response.userId}'`,
        (res) => {
            resolve(res);
        },
        (error) => {
            reject(alert('Failed to load Data, Please check your Internet Connection'));
        }
    )
});