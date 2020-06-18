import React, { Component } from 'react';
import Search from '../components/Search/Search';

class Home extends Component {
  render() {
    return (
      <div className="home container">
        <div className="jumbotron mt-5">
          <p className="lead text-center">Search GitHub User </p>
          <Search />
        </div>
      </div>
    );
  }
}

export default Home;
