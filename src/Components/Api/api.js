import axios from 'axios';

// Calls 100 people in a list
export default {
    people: function() {
    return axios.get(`https://randomuser.me/api/?results=100&nat=us&inc=id,picture,name,phone,location,email,dob`)
        }
}