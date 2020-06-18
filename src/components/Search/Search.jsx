import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

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
        <div className="row">
          <div className="form-group col-md-8">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="GitHub user"
              onChange={(e) => this.onInputChange(e)}
            />
          </div>

          <div className="form-group col-md-4">
            <button className="btn btn-secondary" type="button" onClick={this.searchUser}>
              See GitHub
            </button>
          </div>
        </div>
      </form>
    );
  }
};

export default withRouter(Search);
