import React from 'react'
import api from '../Api/api'
// import '/lumen-bootstrap.css'
// import '/styles.css'

// eslint-disable-next-line

class EmployeeList extends React.Component{
    // search: "",
    state = {
        people: [],
        sortOrder: "ASC",
  }
// randomUserAPI
componentDidMount() {
  api.people()
  .then(res => {
    this.setState({people: res.data.results})
  console.log(this.state.people)
  })
}

// Search field
// searchResults = query => (
//   people.search(query)
//   .then(res => this.setState({people: res.data})
//     .catch(err => console.log(err))
//   ))

// Sort by Last Name
sortBy = sortType => {
    // this.setState({sortType: name})
    
    const sortedEmployees = this.state.people.sort((a, b) => {
        if (b.name[sortType] > a.name[sortType]) {
          return -1
        }
        if (a.name[sortType] > b.name[sortType]) {
          return 1
        }
          return 0;

    });

      if (this.state.sortOrder === "DESC") {
        sortedEmployees.reverse();
        this.setState({ sortOrder: "ASC" });
      } else {
        this.setState({ sortOrder: "DESC" });
      }
      console.log(sortedEmployees)
      this.setState({ results: sortedEmployees })
    }

render() {

    return (
        <div>
    <table className="table-hover table-style">
        <thead>
           <tr className="table-primary th">
             <th>Photo</th>
             <th onClick={() => this.sortBy("first")}>First Name</th>
             <th onClick={() => this.sortBy("last")}>Last Name</th>
             <th>Phone</th>
             <th>Email</th>
             <th>DOB</th>
           </tr>
              </thead>

    <tbody className="rows">          
    {this.state.people && this.state.people.map(person => (       
            <tr className="rows" key={person.id.value}> 
            <td ><img src={person.picture.thumbnail} alt="thumb" /></td>
                <td >{person.name.first}</td>
                <td >{person.name.last}</td>
                <td >{person.phone}</td>
                <td >{person.email}</td>
                <td >{person.dob.date}</td>
            </tr>
    ))} 
            </tbody>
            </table>
            </div>
    )}
    }
  
export default EmployeeList;