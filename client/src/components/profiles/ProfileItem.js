import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const style = {
  'margin-left': '250px',
  width: 'fit-content',
  height: 'fit-content',
};

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    skills,
  },
}) => {
  return (
    <div style={style}>
      <div className='profile bg-light'>
        <img src={avatar} alt='' className='round-img' />
        <div>
          <h2>{name}</h2>
          <p>{status}</p>
          <Link to={`/profile/${_id}`} className='btn btn-primary'>
            View Profile
          </Link>
        </div>
        <ul>
          Skills
          {skills.slice(0, 4).map((skill, index) => (
            <li key={index} className='text-primary'>
              <i className='fa fa-check'></i>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
