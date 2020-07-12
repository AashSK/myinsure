import { oauth, net } from 'react-native-force';

export let getDetails = () => new Promise((resolve, reject) => {
    oauth.getAuthCredentials(
        // getting Data of Logged in User
        (response) => resolve(fetchData(response)),
        () => {
            oauth.authenticate(
                (response) => {
                    resolve(fetchData(response));
                },
                (error) => {
                    reject(alert('Failed to load Authenticate'));
                }
            );
        }
    )
});

export let fetchData = (response) => new Promise((resolve, reject) => {
    net.query(`SELECT AccountId FROM User WHERE Id = '${response.userId}'`,
        (res) => {
            let account = res.records;
            account.filter(data => {
                net.query(`SELECT Name, LastName, FirstName, PersonEmail, PersonMobilePhone, PersonBirthdate FROM Account WHERE Id = '${data.AccountId}'`,
                    (response) => {
                        let records = response.records;
                        resolve(records[records.length - 1]);
                    },
                    (error) => {
                        reject(alert('Failed to load Data, Please check your Internet Connection'));
                    }
                )
            })
        },
        (error) => {
            reject(alert('Failed to load Data, Please check your Internet Connection'));
        }
    )
}); 