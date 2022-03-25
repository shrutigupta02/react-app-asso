import axios from "axios"

// function to login or create an account with the server
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

// function to give a new donation to the server
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

// function to get all the associations from the server
export const getAllAssociations = () => {
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

// function to get all the donations of the user from the server
export const getAllDonations = (user:string) => {
    // mettre la bonne url
    axios.get('https://h3-proxy.services.quickpipes.io/team9/'+{user}+'/donations')
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

