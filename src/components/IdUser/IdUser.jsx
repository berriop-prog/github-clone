import React from 'react';
import './IdUser.scss';

const IdUser = ({ name, login, avatar_url }) => {
  return (
    <div className="idUser">
      <div className="idUser__img img">
        {avatar_url && (
          <img src={avatar_url} alt="octocat" width="241px" height="241px" />
        )}
      </div>
      <div>
        <h3 className="idUser__nameUser nameUser ">
          {name && <span>{name}</span>}
        </h3>
        {login && <p className="idUser__login login">{login}</p>}
        <button className="btn mb-3 mt-2" type="button">
          Follow
        </button>
      </div>
    </div>
  );
};

export default IdUser;
