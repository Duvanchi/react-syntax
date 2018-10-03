import React, { Component } from 'react';
import './App.css';

import UserInput from './Users/User';
import UserOutput from './Users/Usernames';

class App extends Component {
  
  state = {
    users: [
      {username: "What, is your name?"},
    ],
  }

  nameChangeHandler = (event) => {
    this.setState({
      users: [
        { username: event.target.value }
      ]
    })
    console.log(this.state.users.username)
  }
  
  render() {
    return (
      <div className="App">
        <UserInput 
          changed={this.nameChangeHandler}
        />
        <UserOutput
          username={this.state.users[0].username} 
        />
        <UserOutput 
          username={this.state.users[0].username}
        />
      </div>
    );
  }
}


export default App;
