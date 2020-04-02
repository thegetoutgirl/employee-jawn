import React from 'react'
import people from '../Api/api'
import api from '../Api/api'

class EmployeeList extends React.Component{
  state = {
    // search: "",
    people: []
  }

componentDidMount = () => {
  api.people()
  .then(res => {
  console.log(res.data.results);
})
}

searchResults = query => (
  people.search(query)
  .then(res => this.setState({people: res.data})
    .catch(err => console.log(err))
  ))

render() {
  api.people()
    return (
        <div>
            <section className= "container">
    <table>
        <thead>
           <tr>
             <th>Image</th>
             <th>Name</th>
             <th>Phone</th>
             <th>Email</th>
             <th>DOB</th>
           </tr>
              </thead>
         <tbody>
           <tr>
             <td>{people.location.street}</td>
             <td>{people.name}</td>
             <td>{people.phone}</td>
             <td>{people.email}</td>
             <td>{people.dob}</td>
           </tr>

         </tbody>
       </table>
    </section>
         </div>
    )
    }
  }
export default EmployeeList;