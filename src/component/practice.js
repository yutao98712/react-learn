import React, { Component } from 'react';

class Practice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timeID = setInterval( () => {
      this.tick();
    },1000);
  }

  conponentWillUnmount(){
    clearInterval(this.timeID);
  }
  
  tick() {
    this.setState({
      date: new Date()
    });
  }
  

  render() {
    return <h3>It is { this.state.date.toLocaleTimeString() }</h3>
  }

}

export default Practice