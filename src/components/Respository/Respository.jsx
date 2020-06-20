import React from 'react';
import './Respository.scss'

const Repository = ({ language, html_url, description, branches_url, updated_at, license  }) => {
  return (
    <div className="repo-container">
      <h3 className="name">
        <span> {html_url}</span>
      </h3>
      <p className="description">{description}</p>
      <div className="mb-0 f6 text-gray">
        <span className="d-inline-block mr-3"> punto</span>
        <span className="language">{language}</span>
        <span>{branches_url}</span>
        <span>{license}</span>
        <span>{updated_at}</span>
      </div>
    </div>
  );
};

export default Repository;
