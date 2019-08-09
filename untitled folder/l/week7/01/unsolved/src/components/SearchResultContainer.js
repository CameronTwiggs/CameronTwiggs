import React, { Component } from "react";
import SearchForm from "./SearchForm";

const divStyle = {
  width: "600px",
  margin: "auto"
}

class SearchResultContainer extends Component {
  // define state right here

  // When this component mounts, we want to trigger a function 
  // to initialize the webpage
  // the term component mounts means the app started

  componentDidMount() {
    console.log(`The component mounted`)
  }

  searchGiphy = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(`This input is being typed > ${value}`)
    // we need to use this input to update state
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    console.log(`This input was submitted > ${event}`)
  };

  render() {
    return (
      <div style={divStyle}>
        <SearchForm
          search={'puppies'}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        We will render our list here
        
      </div>
    );
  }
}

export default SearchResultContainer;