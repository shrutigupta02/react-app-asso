import axios from "axios"

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

export const getAllAssociations = () => {
    // mettre la bonne url
    axios.get('https://h3-proxy.services.quickpipes.io/team9/get')
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
