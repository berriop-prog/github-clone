import React, { Component } from 'react';
import Search from '../../components/Search/Search';
import { OctofaceIcon } from '@primer/octicons-react';
import fetchGithubData from '../../common/js/fetchGithubData.js';
import './Home.scss';

class Home extends Component {

  constructor(props) {
    super(props);
     this.state = {
       textInput: ''
     }
  }

  onInputChange = (e) => {
    const value = e.target.value;
    this.setState({
      textInput: value
    });
  }

  searchUser = async () => {
    const textInput = this.state.textInput;
    if (textInput !== '') {
      const response = await fetchGithubData(`users/${textInput}`);
      if (response.message && response.message === "Not Found") return;
      this.props.history.push(`/user/${response.login}`); 
    }
  }

  render() {
    return (
      <div className="home container">
        <div className="home__search search__box jumbotron mt-5">
          <h1 className="title lead text-center"> <OctofaceIcon size={28} /> Search GitHub User </h1>
          <Search 
            onInputChange={this.onInputChange} 
            onSearch={this.searchUser} />
        </div>
      </div>
    );
  }
}

export default Home;
