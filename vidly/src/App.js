import React, { Component } from 'react';
import './App.css';
import MovieManager from "./components/movieManager"

class App extends Component {


  render() {
    return (
      <React.Fragment>
        <MovieManager />
      </React.Fragment >
    );
  }
}

export default App;
