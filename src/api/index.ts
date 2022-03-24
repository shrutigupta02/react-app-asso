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

export const getAllAssociations = () => {
    // mettre la bonne url
    axios.get('https://h3-proxy.services.quickpipes.io/team9/getAllAssos')
        .then(function (response:any) {
        // handle success
        return 'c est réussi !'
        console.log(response);
        })
        .catch(function (error:any) {
        // handle error
        console.log(error);
        })
        .then(function () {
        // always executed
    });
}

export const getAllDonations = () => {
    // mettre la bonne url
    axios.get('https://h3-proxy.services.quickpipes.io/team9/user1donations')
        .then(function (response:any) {
        // handle success
        return 'c est réussi !!!'
        console.log(response);
        })
        .catch(function (error:any) {
        // handle error
        console.log(error);
        })
        .then(function () {
        // always executed
    });
}

