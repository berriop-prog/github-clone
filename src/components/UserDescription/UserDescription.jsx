import React from 'react';

const UserDescription = ({ bio, company, location, blog, organizations }) => {
  return (
    <div className="descrip-container">
     <p className="bio">{bio}</p>
     <p className="company">{company}</p>
     <p className="location">{location}</p>
     <p className="blog">{blog}</p>
    </div>
  );
};

export default UserDescription;
