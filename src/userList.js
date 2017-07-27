import React, { Component } from 'react';
import UserItem from './userItem';


class UserList extends Component {
  render() {
    const userList = this.props.users.map(obj => 
      <UserItem key={obj.id} user={obj.user} userIndex={obj.id} deleteUser={this.props.deleteUser} />
    )
    return (
      <ol className="userList">
        {userList}
      </ol>
     )
  }
}

export default UserList