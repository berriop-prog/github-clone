import React from 'react';

const Repository = ({ language, html_url, description, branches_url, updated_at, license  }) => {
  return (
    <div className="repo-container">
      <h3 className="name">
        <span> {html_url} Nombre proyecto</span>
      </h3>
      <p className="description">{description} description</p>
      <p className="mb-0 f6 text-gray">
        <span className="d-inline-block mr-3"> punto</span>
        <span className="language">{language} js</span>
        <span>{branches_url} branch</span>
        <span>{license} license</span>
        <span>{updated_at} Update</span>
      </p>
    </div>
  );
};

export default Repository;
