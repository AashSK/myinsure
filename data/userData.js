import { oauth, net } from 'react-native-force';


export let getDetails = (fetchData) => new Promise((resolve, reject) => {
    // funtion to get User Detail
    oauth.getAuthCredentials(
        (response) => {
            resolve(fetchData(response))
        },
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
    // funtion to query person Account Info
    net.query(`SELECT AccountId FROM User WHERE Id = '${response.userId}'`,
        (res) => {
            let account = res.records;
            account.filter(data => {
                net.query(`SELECT Name, PersonEmail, PersonMobilePhone, PersonBirthdate, BillingStreet, BillingCity, BillingState, BillingPostalCode FROM Account WHERE Id = '${data.AccountId}'`,
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

export let updateDetails = (fetchData, accData) => new Promise((resolve, reject) => {
    // funtion to get User Detail and passing in edited Account Data
    oauth.getAuthCredentials(
        (response) => resolve(fetchData(response, accData)),
        () => {
            oauth.authenticate(
                (response) => {
                    resolve(fetchData(response, accData));
                },
                (error) => {
                    reject(alert('Failed to load Authenticate'));
                }
            );
        }
    )
});

// Query
export let editableData = (response) => new Promise((resolve, reject) => {
    // funtion to query person Account Info
    net.query(`SELECT AccountId FROM User WHERE Id = '${response.userId}'`,
        (res) => {
            let account = res.records;
            account.filter(data => {
                net.query(`SELECT PersonEmail, PersonMobilePhone, BillingStreet, BillingCity, BillingState, BillingPostalCode FROM Account WHERE Id = '${data.AccountId}'`,
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

// Updating Data 
export let updateData = (response, accData) => new Promise((resolve, reject) => {
    // funtion to update person Account Info
    net.query(`SELECT AccountId FROM User WHERE Id = '${response.userId}'`,
        (res) => {
            let account = res.records;
            let data = account.filter(data => {
                net.update("Account",
                    data.AccountId, accData,
                    (response) => {
                        resolve(alert('Updated Successfully'));
                    }, (error) => {
                        reject(alert('Your Data could not be updated'));
                    });
            })

        },
        (error) => {
            reject(alert('Failed to load Data, Please check your Internet Connection'));
        }
    )
});

export let getContractData = (response) => new Promise((resolve, reject) => {
    // funtion to get Crontract Data 
    net.query(`SELECT Id, AccountId FROM User WHERE Id = '${response.userId}'`,
        (res) => {
            let account = res.records;
            account.filter(data => {
                net.query(`SELECT Id, ad_Zahlungsart__c,FinServ__RecordTypeName__c,ad_Vertragsstatus__c,FinServ__OpenDate__c,FinServ__PaymentFrequency__c,FinServ__CloseDate__c,ad_Tarif__c,ad_Versicherungsscheinnummer__c FROM FinServ__FinancialAccount__c WHERE FinServ__PrimaryOwner__c = '${data.AccountId}'`,
                    (response) => {
                        resolve(response.records);
                    },
                    (error) => {
                        reject(alert('Failed to load Data, Please check your Internet Connection'));
                    })
            })
        },
        (error) => {
            reject(alert('Failed to load Data, Please check your Internet Connection'));
        }
    )
});

