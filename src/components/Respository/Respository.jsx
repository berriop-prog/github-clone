import React from 'react';
import './Respository.scss';

const Repository = ({
  language,
  html_url,
  description,
  branches_url,
  updated_at,
  license,
  repoName,
}) => {
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
        <span className="info__text text-color mr-3">punto</span>
        <span className="info__text">{language} </span>
        <span className="info__text">{branches_url}</span>
        {license && <span className="info__text"> {license}</span>}
        <span className="info__text"> Updated {updated_at}</span>
      </div>
    </div>
  );
};

export default Repository;
