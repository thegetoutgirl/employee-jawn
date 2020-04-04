import axios from 'axios';

// Calls one person with specific fields 

// export default {
//     solo: function() {
//         var one = axios.get('https://randomuser.me/api/inc=id,picture,name,phone,email,dob')
//         return one
//     }
// }

// Calls 20 people in a list
export default {
    people: function() {
    return axios.get(`https://randomuser.me/api/?results=20&nat=us&inc=id,picture,name,phone,email,dob`)
        }
}