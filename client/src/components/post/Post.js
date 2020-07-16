import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPost } from '../../actions/post';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

//import SinglePost from './SinglePost';
import PostItem from '../posts/PostItem';

const Post = ({ getPost, post: { posts, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost]);

  console.log({ posts });
  console.log(match.params.id);
  const postId = match.params.id;
  console.log(postId);
  //const comments = posts.find((post) => posts._id === match.params.id);
  //console.log(posts.findIndex(match.params.id));
  let comm = [];
  for (let i = 0; i < posts.length; i++) {
    let temp = posts[i]._id;
    if (temp === postId) {
      //console.log(postId);
      comm = posts[i].comments;
      break;
    }
  }

  console.log(comm);
  for (let i = 0; i < comm.length; i++) {
    console.log(comm[i].text);
  }

  //let comments = posts.comments;
  //console.log(comments);
  //comments.map((comment) => console.log(comment._id));
  const style = {
    'margin-top': '70px',
  };
  return (
    <Fragment>
      <div style={style}>
        Comment Section
        <div className='posts'>
          <PostItem key={posts._id} post={posts} showActions={false} />
        </div>
        <div>
          <Link to='/posts' className='btn'>
            Back to posts
          </Link>
          <CommentForm postId={posts._id} />
        </div>
      </div>
      <div class='post bg-white p-1 my-1'>
        <div>
          <img class='round-img' alt='' />
          <h4>demon</h4>
        </div>
        <div>
          <p class='my-1'>I also stucked in this try Codevolution on youtube</p>
        </div>
      </div>
      <div class='post bg-white p-1 my-1'>
        <div>
          <img class='round-img' alt='' />
          <h4>pradeep</h4>
        </div>
        <div>
          <p class='my-1'>I think i can fix this</p>
        </div>
      </div>
    </Fragment>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  post: state.post,
});
export default connect(mapStateToProps, { getPost })(Post);

//
/*{posts
  .filter((post) => post._id === posts._id)
  .map((comments) => (
    <CommentItem
      key={comments._id}
      comment={comments}
      postId={posts._id}
    />
  ))}
  
  {comments.map((comment) => (
          <CommentItem comment={comment} />
        ))}

  {comm.map((comment) => (
          <CommentItem key={comment._id} comment={comment} />
        ))}

        {comm.map((comments) => (
        <div>
          <p class='my-1'>{comments}</p>
        </div>
      ))}
  */
