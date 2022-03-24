import axios from "axios"

// login and create an account
export const postNewUser = (login:string, password:string) => {
  
    const axios = require('axios').default;

    // axios.<method> will now provide autocomplete and parameter typings
    
    axios.post('https://h3-proxy.services.quickpipes.io/team9/setUser', {
        login: login,
        password: password
    })
    .then(function (response:any) {
    console.log(response);
    })
    .catch(function (error:any) {
    console.log(error);
    });

}

// to give a new donation to the server
export const postNewDonation = (donationNumber:number, associationName:string, userName:string) => {
  
    const axios = require('axios').default;

    // axios.<method> will now provide autocomplete and parameter typings
    
    axios.post('https://h3-proxy.services.quickpipes.io/team9/setDonation', {
        donation:donationNumber,
        association:associationName,
        user:userName
    })
    .then(function (response:any) {
    console.log(response);
    })
    .catch(function (error:any) {
    console.log(error);
    });

}

// push a new donation to the server
// event:React.FormEvent<HTMLFormElement>

// export const postNewDonation = (newDonationNumber:number, newDonationAsso:string) => {
//     // event.preventDefault();
//     const axios = require('axios').default;

//     // axios.<method> will now provide autocomplete and parameter typings
    
//     axios.post('https://h3-proxy.services.quickpipes.io/team9/setUser', {
//         name: newDonationNumber,
//         amount: newDonationAsso
//     })
//     .then(function (response:any) {
//     console.log(response);
//     })
//     .catch(function (error:any) {
//     console.log(error);
//     });
// }

export const getAllAssociations = () => {
    // mettre la bonne url
    axios.get('https://h3-proxy.services.quickpipes.io/team9/getAllAssos')
        .then(function (response:any) {
        // handle success
        return 'c est réussi'
        console.log(response);
        console.log('ouaais')
        })
        .catch(function (error:any) {
        // handle error
        console.log(error);
        })
        .then(function () {
        // always executed
    });
}

