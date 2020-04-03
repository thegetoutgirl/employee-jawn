import React from 'react'
import api from '../Api/api'
// eslint-disable-next-line

class EmployeeList extends React.Component{
    // search: "",
    state = {
        people: []
  }

  // var person = [ 
  //   picture: results.picture.thumbnail,
  //   fName: results.name.first,
  //   lName: results.name.last,
  //   phone: results.phone,
  //   email: results.email,
  //   dob: results.dob.date
  //   ] 

componentDidMount() {
  api.people()
  .then(res => {
    this.setState({people: res.data.people})
  console.log(this.state.people)
  })
}
// searchResults = query => (
//   people.search(query)
//   .then(res => this.setState({people: res.data})
//     .catch(err => console.log(err))
//   ))

render() {
    return (
        <div>
    <table>
        <thead>
           <tr>
             <th>Photo</th>
             <th>First Name</th>
             <th>Last Name</th>
             <th>Phone</th>
             <th>Email</th>
             <th>DOB</th>
           </tr>
              </thead>
              
    {this.state.people && this.state.people.map(person =>       
            <div><tbody >
            <tr key={person.id.value}> 
            <td>
            <td ><img src={person.picture.thumbnail} alt="thumb" /></td>
                <td >{person.name.first}</td>
                <td >{person.name.last}</td>
                <td >{person.phone}</td>
                <td >{person.email}</td>
                <td >{person.dob.date}</td>
            </td>
            </tr>
            
            </tbody>
            </div>
              )} 
        </table>
            </div>
    )}
  }
export default EmployeeList;