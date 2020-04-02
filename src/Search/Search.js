import React, { Component } from "react";
import { render } from "@testing-library/react";

class Search extends Component {
    state = {
        FRUIT/PEOPLE
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