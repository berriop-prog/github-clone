import React from 'react';

const IdUser = ({ language, name, description }) => {
  return (
    <div className="idUser-container">
    <img src={'/src/assets/Octocat.png'} alt="octocat" />
            <div>
              <h1>
                {' '}
                <span> nombre</span>
              </h1>
              <p>Nickname</p>
              <button type="button" className="btn btn-light">
                Follow
              </button>
            </div>
    </div>
  );
};

export default IdUser;
