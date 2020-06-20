import React from 'react';

const IdUser = ({ name, login, avatar_url }) => {
  return (
    <div className="idUser-container">
      {avatar_url && (<img src={avatar_url} alt="octocat" width="241px" height="241px" />)}
      <div>
        <h3 className="name">
          {name && (<span>{name}</span>)}
        </h3>
        {login && (<p className="login">{login}</p>)}
        <button type="button" className="btn btn-light">
          Follow
        </button>
      </div>
    </div>
  );
};

export default IdUser;
