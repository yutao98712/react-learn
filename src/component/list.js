import React, { Component } from 'react'


function ListItem(props) {
  return <li>{props.value}</li>
}

function UserList(props) {
  const users = props.users;
  const listItems = users.map((user) =>
    <ListItem key={user.id.toString()} value={user.name}/>
  )
  return (
    <ul>
      { listItems }
    </ul>
  )
}
class Number extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: 'aaa' },
        { id: 2, name: 'bbb' },
        { id: 3, name: 'ccc' },
        { id: 4, name: 'ddd' }
      ]
    };
    this.addUsers = this.addUsers.bind(this);
  }

  addUsers() {
    let users = this.state.users;
    console.dir(this.state.users);
    let lastId = users[users.length-1].id;
    lastId++;
    let newUser = {id: lastId, name: 'newUser'};
    console.log(newUser);
    this.setState( (prevState) => ({
      usres: prevState.users.push(newUser)
    }));
  }

  render() {
    return (
      <div>
        <UserList users = {this.state.users}/>
        <button onClick={ this.addUsers }>addUsers</button>
      </div>
      
    );
  }
}

export default Number