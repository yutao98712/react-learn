import React, { Component } from 'react';

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

class SignUpDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: ''
    }
    this.handelChange = this.handelChange.bind(this);
    this.handelSignUp = this.handelSignUp.bind(this);
  }

  handelChange(event) {
    this.setState({
      login: event.target.value
    });
  }

  handelSignUp() {
    alert(`Welcome aborad,${this.state.login}!`);
  }
  render() {
    return (
      <Dialog title="Mars Exploration Program" message="How should we refer to you?">
        <input value={this.state.login} onChange={this.handelChange}/>
        <button onClick={this.handelSignUp}>Sign Me Up</button>
      </Dialog>
    )
  }
    
    
}

export default SignUpDialog;