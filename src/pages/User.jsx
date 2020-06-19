import React, { Component } from 'react';
import IdUser from '../components/IdUser/IdUser';
import Search from '../components/Search/Search';
import UserDescription from "../components/UserDescription/UserDescription";
import Respository from '../components/Respository/Respository';
import './User.scss';

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
        <div className="container-user">
          <div className="item-2">
            <IdUser />            
          </div>
          <div className="item-3">
            <UserDescription />
          </div>
          <div className="item-4">
            <Search
              label={'Buscador'}
              id={'search'}
              ariaLabel={'Search'}
              placeholder={'Buscar en los repositorios'}
            />
          </div>
          <div className="item-5">
            <Respository />
          </div>
        </div>        
      </div>
    );
  }
}

export default User;
