import React from 'react';

const UserDescription = ({ bio, company, location, blog }) => {
  return (
    <div className="descrip-container">
     {bio && (<p className="bio">{bio}</p>)}
     {company && (<p className="company">{company}</p>)}
     {location && (<p className="location">{location}</p>)}
     {blog && (<p className="blog">{blog}</p>)}
    </div>
  );
};

export default UserDescription;
