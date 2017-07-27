import React, { Component } from 'react';
import UserList from './userList';
import AddUser from './addUser';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
    this.handleAddUser = this.handleAddUser.bind(this);
    this.handleDeleteUser = this.handleDeleteUser.bind(this);
  }

  handleAddUser([{id, user}]) {
    const users = this.state.users.concat([{id, user}]);
    this.setState({users});
  }

  handleDeleteUser(e) {
    let index = e.target.value;
    const usersFiltered = this.state.users.filter((userObj) => {
      return userObj.id !== index;
    });
    this.setState({
      users:usersFiltered
    });
  }

  render() {
    return (
      <div className="App">
        <AddUser onSubmit={this.handleAddUser} />
        <UserList users={this.state.users} deleteUser={this.handleDeleteUser} />
      </div>
    );
  }
}

export default App;
