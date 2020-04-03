// import React from 'react';
import axios from 'axios';

// class Api extends React.component {

export default {
    people: function() {
    return axios.get(`https://randomuser.me/api/?results=20`)
        }
}

// const url = 'https://randomuser.me/api/?results=50';

// //api call
// export default {
//     ApiSearch: function () {
//         console.log(url)
//         return axios.get(url)

//     }
