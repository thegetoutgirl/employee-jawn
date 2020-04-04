import React, { Component } from "react";
import { render } from "@testing-library/react";

class Search extends Component {
    state = {
    search: "",
    people: [],
    searchResults: [],
}    

handleInputChange = event => {
    console.log(event.target.value)

    this.ListeningStateChangedEvent({
        [event.target.name]: event.target.value
    });

}
    render() {
        <div>
        <input type ="text" name="search" value={this.state.search} on Change={this.handleInputChange} />
        </div>
   }
   
}
Search field
searchResults = query => (
  people.search(query)
  .then(res => this.setState({people: res.data})
    .catch(err => console.log(err))
  ))