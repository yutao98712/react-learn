import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  HashRouter
} from 'react-router-dom';
import logo from './logo.svg';
// import './App.css';
import Practice from './component/practice';
import Toggle from './component/toggle';
import List from './component/list';
import NameForm from './component/nameForm'
import SignUpDialog from './component/signUp';
import Calculator from './component/boiling';
import FilterableProductTable from './component/product2';
import Header from './component/header';
import Carousel from './component/carousel';
class App extends Component {
  render() {
    return (
      <HashRouter namebase="/build">
        <div className="app">
          <Header />
          <div className="content">
            <Route exact path="/home" component={FilterableProductTable}></Route>
            <Route exact path="/carousel" component={Carousel}></Route>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
