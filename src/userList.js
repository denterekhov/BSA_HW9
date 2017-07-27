import React, { Component } from 'react';
import UserItem from './userItem';


class UserList extends Component {
    shouldComponentUpdate(nextProps, nextState) {
      if (nextProps.users.length !== this.props.users.length) {
        console.log("Yeah! Let's update our userlist!");
        return true;
      } else {
        console.log("Nothing to update :(");
        return false;
      }
  }
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