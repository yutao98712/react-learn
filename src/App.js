import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import Practice from './component/practice.js';
import Toggle from './component/toggle.js';
import List from './component/list.js';
import NameForm from './component/nameForm.js'
import SignUpDialog from './component/signUp.js';
import Calculator from './component/boiling.js';
import FilterableProductTable from './component/product.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
        <FilterableProductTable />
      </div>
    );
  }
}

export default App;
