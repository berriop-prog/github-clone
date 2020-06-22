import React, { Component } from 'react';
import IdUser from '../../components/IdUser/IdUser';
import Search from '../../components/Search/Search';
import UserDescription from '../../components/UserDescription/UserDescription';
import Respository from '../../components/Respository/Respository';
import { MarkGithubIcon } from '@primer/octicons-react';
import fetchGithubData from '../../common/js/fetchGithubData.js';
import './User.scss';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      githubUser: props.match.params.username,
      githubUserData: null,
      githubUserRepos: null,
    };
  }

  async componentDidMount() {
    const { githubUser } = this.state;
    const userProfile = await fetchGithubData(`users/${githubUser}`);
    const userRepos = await fetchGithubData(`users/${githubUser}/repos`);
    this.setState({
      githubUserData: userProfile,
      githubUserRepos: userRepos,
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
    const githubUserRepos = (state && state.githubUserRepos) || [];
    return (
      <div>
        <header className=" py-lg-0 flex-wrap"><MarkGithubIcon size={32} className="icon" /></header>
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
            <Search
              label={'Buscador'}
              id={'search'}
              ariaLabel={'Search'}
              placeholder={'Buscar en los repositorios'}
            />
            {githubUserRepos.map((repo, key) => {
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
