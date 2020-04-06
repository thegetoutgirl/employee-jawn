import React from 'react'
import api from '../Api/api'
import Search from '../Search/Search'
import '../../lumen-bootstrap.css'
import './employees.css'


class EmployeeList extends React.Component{
    state = {
        people: [],
        sortOrder: "ASC",
        searchResults: [],
        search: '',
  }

// randomUserAPI
componentDidMount() {
  api.people()
  .then(res => {
    this.setState({
        people: res.data.results,
        searchResults: res.data.results,
})
  console.log(this.state.people)
  });
}

// Sort by Last Name, First Name, City
sortBy = sortType => {
    
    const sortedEmployees = this.state.people.sort((a, b) => {
        if (b.name[sortType] > a.name[sortType]) {
          return -1
        }
        if (a.name[sortType] > b.name[sortType]) {
          return 1
        }
        // if (b.city[sortType] > a.city[sortType]) {
        //   return -1
        // }
        // if (a.city[sortType] > b.city[sortType]) {
        //   return 1
        // }
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

handleInputChange = event => {
       
    const searchTerm = event.target.value.toLowerCase();
    const searchResults = this.state.people.filter(person =>{
        const find = person.name.first + person.name.last;
        return find.toLowerCase().includes(searchTerm)
        });
   
        this.setState({
            searchResults: searchResults,
            search: searchTerm
        });
    }

render() {
    return (
        <>
        <br />
        <div>
            <Search handler={this.handleInputChange} defaultValue={this.state.search}>
                </Search>
        <br />
<div className="table-style"><p>Click to sort by First or Last Name!</p></div> 

    <table className="table-hover table-style">
        <thead>
           <tr className="table-primary th">
             <th>Photo</th>
             <th onClick={() => this.sortBy("first")}>First Name</th>
             <th onClick={() => this.sortBy("last")}>Last Name</th>
             <th>Phone</th>
             <th>Email</th>
             <th onClick={() => this.sortBy("city")}>City</th>
             <th>DOB</th>
           </tr>
              </thead>

    <tbody className="rows">          
    {this.state.searchResults && this.state.searchResults.map(person => (       
            <tr className="rows" key={person.id.value}> 
            <td ><img src={person.picture.thumbnail} alt="thumb" /></td>
                <td >{person.name.first}</td>
                <td >{person.name.last}</td>
                <td >{person.phone}</td>
                <td>{person.email}</td>
                <td> {person.location.city}</td>
                <td >{person.dob.date.split("T")[0]}</td>
            </tr>
    ))} 
            </tbody>
            </table>
            </div>
            </>
    )}
    }
  
export default EmployeeList;