import React, { Component } from 'react';

class User extends Component {

  constructor(props) {
    super(props);
    this.state = {
      githubUser: props.match.params.username,
    };
  }

  async componentDidMount() {
    console.log(this.state);
    const { githubUser } = this.state;
    console.log(`https://api.github.com/users/${githubUser}/repos`);
    const response = await fetch(
      `https://api.github.com/users/${githubUser}/repos`
    );
    const repos = await response.json();
    console.log(repos);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <img src="#" width="30" height="30" alt="#" loading="lazy" />
        </nav>

        <div className="container-xl">
          
          
          
        </div>
       
      </div>
    );
  }
}

export default User;
