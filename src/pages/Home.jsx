import React, { Component } from 'react';
import Search from '../components/Search/Search';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="home container">
        <div className="home__search search__box jumbotron mt-5">
          <h1 className="title lead text-center">Search GitHub User </h1>
          <Search />
        </div>
      </div>
    );
  }
}

export default Home;
