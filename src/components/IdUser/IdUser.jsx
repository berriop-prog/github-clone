import React from 'react';

const IdUser = ({ name, login, avatar_url }) => {
  return (
    <div className="idUser-container">
      <img src={avatar_url} alt="octocat" />
      <div>
        <h3 className="name">
          <span>{name}</span>
        </h3>
        <p className="login">{login}</p>
        <button type="button" className="btn btn-light">
          Follow
        </button>
      </div>
    </div>
  );
};

export default IdUser;
