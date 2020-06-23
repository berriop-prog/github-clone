import React, { Component } from 'react';
import { RepoForkedIcon, LawIcon } from '@primer/octicons-react';
import colors from '../../common/json/colors.json';
import fetchGithubData from '../../common/js/fetchGithubData.js';
import './Respository.scss';

class Repository extends Component {

  constructor(props) {
    super(props);
    this.state = {
      branches: 0,
    }
  }

  async componentDidMount() {
    const self = this || {};
    const props = (self && self.props) || {};
    const repoName = (props && props.repoName) || '';
    const login = (props && props.login) || '';
    const branches = await fetchGithubData(`repos/${login}/${repoName}/branches`);//consulta
    const numberBranches = branches.length;
    this.setState({
      branches: numberBranches
    });
  }

  render() {
    const self = this || {};
    const props = (self && self.props) || {};
    const language = (props && props.language) || '';
    const html_url = (props && props.html_url) || '';
    const description = (props && props.description) || '';
    const updated_at = (props && props.updated_at) || '';
    const license = (props && props.license) || '';
    const repoName = (props && props.repoName) || '';
    const state = (self && self.state) || {};
    const branches = (state && state.branches) || 0;
    const updatedAtObject = new Date(updated_at);
    const formattedDate = updatedAtObject.toLocaleString('en-US', {
      month:'short', day:'numeric', year:'numeric'
    });
  return (
    <div className="repository p-3">
      <h3 className="repository__reponame reponame">
        <a className="reponame__reference" href={html_url}>
          {repoName}
        </a>
      </h3>
      {description && (
        <p className="repository__description mt-2 mb-3">{description}</p>
      )}
      <div className="repository__info info mb-0">
        {
          colors && colors[language] && colors[language].color && (
            <span className="info__color" style={{backgroundColor: colors[language].color}}></span>
          )
        }
        <span className="info__text">{language}</span>
        <span className="info__text"> <RepoForkedIcon size={14} /> {branches} </span>
        {license && <span className="info__text"> <LawIcon size={14} /> {license} </span>}
        <span className="info__text"> Updated {formattedDate}</span>
      </div>
    </div>
    );
  }
}

export default Repository;
