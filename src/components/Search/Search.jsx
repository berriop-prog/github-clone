import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Search.scss'

class Search  extends Component {

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
      const response = await fetch(
        `https://api.github.com/users/${textInput}`
      );
      const repos = await response.json();
      if (repos.message && repos.message === "Not Found") return;
      this.props.history.push(`/user/${repos.login}`); 
    }
  }

  render() {
    return (
      <form>
        <div className="search row">
          <div className="search__form form">
            <input
              type="text"
              className="form__control  input"
              placeholder="GitHub user"
              onChange={(e) => this.onInputChange(e)}
            />
          </div>

          <div className="form__control  col-md-4 py-3">
            <button className="button__form btn" type="button" onClick={this.searchUser}>
              See GitHub
            </button>
          </div>
        </div>
      </form>
    );
  }
};

export default withRouter(Search);
