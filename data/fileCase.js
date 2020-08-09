import { oauth, net } from 'react-native-force';

// Updating Case Data 
export let updateCaseData = (caseData) => new Promise((resolve, reject) => {
    net.create("Case",
        caseData,
        (response) => {
            resolve(console.log(`Success`));
        }, (error) => {
            reject(alert('Lieber Kunde ihre Meldung war leider nicht Erfolgreich. Bitte Versuchen sie es nocheinmal!'));
        });
});