import React, { Component } from 'react';
import IdUser from '../../components/IdUser/IdUser';
import Search from '../../components/Search/Search';
import UserDescription from '../../components/UserDescription/UserDescription';
import Respository from '../../components/Respository/Respository';
import fetchGithubData from '../../common/js/fetchGithubData.js';
import './User.scss';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      githubUser: props.match.params.username,
      githubUserData: null,
      githubUserRepos: null,
      findRepo: '',
      languages: [],
      language: ''
    };
  }

  async componentDidMount() {
    const { githubUser } = this.state;
    const userProfile = await fetchGithubData(`users/${githubUser}`);
    const userRepos = await fetchGithubData(`users/${githubUser}/repos`);
    const languages = ['All'];
    if (userRepos) {
      userRepos.forEach(repo => {
        const takenLanguages = languages.find(lang => lang.toLowerCase() === repo.language.toLowerCase());
        if (!takenLanguages) {
          languages.push(repo.language);
        }
      });
      this.setState({
        githubUserData: userProfile,
        githubUserRepos: userRepos,
        languages: languages
      });
    }
  }

  onInputChange = (e) => {
    const value = e.target.value;
    this.setState({
      findRepo: value
    });
  }
  
  filterReposBySearch = (repos = []) => {
    const self = this || {}; //verificacion 37-41
    const state = (self && self.state) || {};
    const findRepo = (state && state.findRepo) || '';
    return repos.filter(repo => (
      repo.name.toLowerCase().includes(findRepo.toLowerCase())
    ));
  }

  filterReposByLanguage = () => {
    const self = this || {}; //verificacion 37-41
    const state = (self && self.state) || {};
    const language = (state && state.language) || '';
    const githubUserRepos = (state && state.githubUserRepos) || [];
    if (language === 'All') return githubUserRepos;
    return githubUserRepos.filter(repo => (
      repo.language.toLowerCase().includes(language.toLowerCase())
    ));
  }

  language = (e) => {
    const value = e.target.value;
    this.setState({
      language: value
    });
  }

  render() {
    const self = this || {}; //verificacion 37-41
    const state = (self && self.state) || {};
    const githubUserData = (state && state.githubUserData) || {};
    const bio = (githubUserData && githubUserData.bio) || '';
    const company = (githubUserData && githubUserData.company) || '';
    const location = (githubUserData && githubUserData.location) || '';
    const blog = (githubUserData && githubUserData.blog) || '';
    const avatar_url = (githubUserData && githubUserData.avatar_url) || '';
    const name = (githubUserData && githubUserData.name) || '';
    const login = (githubUserData && githubUserData.login) || '';
    const reposByLanguage = self.filterReposByLanguage();
    const repos = self.filterReposBySearch(reposByLanguage);
    const languages = (state && state.languages) || [];
    return (
      <div>
        <div className="container-user">
          <div className="user-div">
            <IdUser avatar_url={avatar_url} name={name} login={login} />
            <UserDescription
              bio={bio}
              company={company}
              location={location}
              blog={blog}
            />
          </div>
          <div className="repos-div">
            <div className="user-search">
              <select className="summary-select" onChange={this.language}>
                {languages.map((language, key) => (<option key={key}>{language}</option>))}
              </select>
              <Search
                ariaLabel='Search'
                placeholder="Find a repository"
                onInputChange={this.onInputChange} 
                />
            </div>
            {repos.map((repo, key) => {
              const language = (repo && repo.language) || '';
              const repoName = (repo && repo.name) || '';
              const html_url = (repo && repo.html_url) || '';
              const description = (repo && repo.description) || '';
              const updated_at = (repo && repo.updated_at) || '';
              const license = (repo && repo.license) || {};
              const name = (license && license.name) || '';
              return (
                <Respository
                  key={key}
                  login={login}
                  repoName={repoName}
                  language={language}
                  html_url={html_url}
                  description={description}
                  updated_at={updated_at}
                  license={name}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default User;
