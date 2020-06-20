import React, { Component } from 'react';
import IdUser from '../components/IdUser/IdUser';
import Search from '../components/Search/Search';
import UserDescription from '../components/UserDescription/UserDescription';
import Respository from '../components/Respository/Respository';
import './User.scss';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      githubUser: props.match.params.username,
      githubUserData: null,
      githubUserRepos: null
    };
  }

  async componentDidMount() {
    const { githubUser } = this.state;
    const userProfile = await this.getGithubData(githubUser);
    const userRepos = await this.getGithubData(`${githubUser}/repos`);
    this.setState({
      githubUserData: userProfile,
      githubUserRepos: userRepos
    });
  }

  getGithubData = async (endPoint) => {
    const response = await fetch(
      `https://api.github.com/users/${endPoint}`
    );
    const body = await response.json();
    return body;
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
    
    console.log(githubUserData);
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <img src="#" width="30" height="30" alt="#" loading="lazy" />
        </nav>
        <div className="container-user">
          <div className="item-2">
            <IdUser avatar_url={avatar_url}
             name={name} 
             login={login} />
          </div>
          <div className="item-3">
            <UserDescription
              bio={bio}
              company={company}
              location={location}
              blog={blog}
            />
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
            {
              githubUserRepos.map((repo, key) => {
                console.log(repo);
                const language = (repo && repo.language) || '';                
                const html_url = (repo && repo.html_url) || '';                
                const description = (repo && repo.description) || '';                
                const branches_url = (repo && repo.branches_url) || '';                
                const updated_at = (repo && repo.updated_at) || '';                
                const license = (repo && repo.license) || {};
                const name = (license && license.name) || ''; 
                return (
                  <Respository key={key}
                    language={language} 
                    html_url={html_url} 
                    description={description}
                    branches_url={branches_url} 
                    updated_at={updated_at}
                    license={name} />
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default User;
