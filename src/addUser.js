import React, { Component } from 'react';
let shortid = require('shortid');


class AddUser extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onInput = this.onInput.bind(this);

    this.state = {
      input: ''
    }
  }

  onInput(e) {
    this.setState({
      input: e.target.value
    });
  }

  onSubmit(e) {
    const userInput = document.getElementById('user_input');
    const id = shortid.generate();
    const user = this.state.input;
    if(user) {
      this.props.onSubmit([{id, user}]);
      userInput.value = '';
      this.setState({input: ''});
    }
    e.preventDefault();
  }

  render() {
    return (
      <form className="userForm" onSubmit={this.onSubmit}>
        <input id='user_input'
          value={ this.state.value }
          onChange={ this.onInput }
          type="text" autoFocus />
        <button type="submit">Add</button>
      </form>
    )
  }
}

export default AddUser