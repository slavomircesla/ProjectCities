import React, { Component } from 'react';
import './App.css';
import Cities from './Cities/Cities';

class App extends Component {
   state={
    cities: [ { city:'Kosice', country:'SK'},
    { city:'Amsterdam', country:'NL'},
    { city:'London', country:'UK'},
    { city:'Madrid', country:'ES'},
    { city:'Detroit', country:'US'} ]
  };

  render() {

    return (
        <Cities list={this.state.cities} />
      );

  }
}

export default App;
