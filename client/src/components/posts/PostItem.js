import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import PostForm from './PostForm';
import { addLike, removeLike, deletePost } from '../../actions/post';

const style = {
  'background-color': 'red',
  border: 'none',
  color: 'white',
  padding: '7px 16px',
};

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions,
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
          {showActions && (
            <Fragment>
              <button
                onClick={(e) => addLike(_id)}
                type='button'
                class='btn btn-light'
              >
                <i class='fa fa-thumbs-up'></i>
                <span>{likes.length}</span>
              </button>
              <button
                onClick={(e) => removeLike(_id)}
                type='button'
                class='btn btn-light'
              >
                <i class='fa fa-thumbs-down'></i>
              </button>
              <Link to={`/posts/${_id}`} class='btn btn-primary'>
                Discussion <span class='comment-count'>{comments.length}</span>
              </Link>
              {!auth.loading && user === auth.user._id && (
                <button
                  style={style}
                  onClick={(e) => deletePost(_id)}
                  type='btn'
                  class='fa fa-close'
                >
                  {' '}
                  Delete
                  <i class='fa fa-times'></i>
                </button>
              )}
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
