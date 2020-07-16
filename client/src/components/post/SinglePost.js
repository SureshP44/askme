import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';

const SinglePost = ({
  post: { _id, text, name, avatar, user, likes, comments, date },
}) => {
  return (
    <Fragment>
      <div class='post bg-white p-1 my-1'>
        <div>
          <Link to={`/profile/${user}`}>
            <img class='round-img' src={avatar} alt='' />
            <h4>{name}</h4>
          </Link>
        </div>
        <div>
          <p class='my-1'>{text}</p>
          <p class='post-date'>
            Posted on <Moment format='DD/MM/YYYY'>{date}</Moment>{' '}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

SinglePost.propTypes = {
  post: PropTypes.object.isRequired,
};

export default connect()(SinglePost);
