import React, { Component } from 'react';

class Helper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      posts: []
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.tick);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  render () {
    return (
      <h3>It is {this.state.date.toLocaleTimeString()}</h3>
    );
  }
}

export default Helper;