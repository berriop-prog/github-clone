import React from 'react';
import './UserDescription.scss'

const UserDescription = ({ bio, company, location, blog }) => {
  return (
    <div className="userDescription">
     {bio && (<p className="userDescription__bio bio">{bio}</p>)}
     {company && (<p className="bio__company">{company}</p>)}
     {location && (<p className="bio__location">{location}</p>)}
     {blog && (<p className="bio__blog">{blog}</p>)}
    </div>
  );
};

export default UserDescription;
