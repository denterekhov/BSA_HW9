import React, { Component } from 'react';

class UserItem extends Component {
  render() {
    return (
      <li className="userItem">
        <p>{this.props.user}</p>
        <button onClick={this.props.deleteUser} value={this.props.userIndex}>Delete</button>
      </li>
    )
  }
}

export default UserItem