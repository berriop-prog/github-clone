import React from 'react';

const Repository = ({ language, name, description }) => {
  return (
    <div className="repo-container">
      <h3 className="name"><span> {name} hola</span></h3>
      <p className="description">{description} xx</p>          
      <p className="mb-0 f6 text-gray">
       <span className="d-inline-block mr-3"> punto</span>
       <span className="language">{language} js</span>
      </p>
    </div>
  );
};

export default Repository;
