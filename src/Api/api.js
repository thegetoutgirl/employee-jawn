// import React from 'react';
import axios from 'axios';

// class Api extends React.component {

export default {
    people: function() {
    return axios.get(`https://randomuser.me/api/`)

}
}
