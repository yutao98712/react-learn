import React, {
  Component
} from 'react';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }
  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        <h1>{ isLoggedIn? "welcome back" : "please sign up" }</h1>
        <button onClick={ isLoggedIn? this.handleLogoutClick : this.handleLoginClick}>
          { isLoggedIn? 'logout' : 'login' }
        </button>
      </div>
    )
  }

}
export default Toggle