import React from 'react';
import { OrganizationIcon, LocationIcon, LinkIcon } from '@primer/octicons-react';
import './UserDescription.scss'

const UserDescription = ({ bio, company, location, blog }) => {
  return (
    <div className="userDescription">
     {bio && (<p className="userDescription__bio bio">{bio}</p>)}
     {company && (<p className="bio__company"><OrganizationIcon size={14} /> {company}</p>)}
     {location && (<p className="bio__location"><LocationIcon size={14} /> {location}</p>)}
     {blog && (<p className="bio__blog"><LinkIcon size={14} />{blog}</p>)}
    </div>
  );
};

export default UserDescription;
