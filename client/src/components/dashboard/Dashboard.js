import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import Spinner from '../layouts/Spinner';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile,
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const style = {
    'margin-top': '70px',
  };
  return (
    <Fragment>
      <div style={style} className='dashboard-1'></div>
      <div>
        <h1 className='large text-primary'>Dashboard</h1>
        <p className='lead'>
          <i className='fa fa-user'></i> Welcome {user && user.name}
        </p>
      </div>
      {profile !== null ? (
        <Fragment>
          <div className='dashboard-2'>
            To Update your profile
            <Link to='/create-profile' className='btn btn-primary my-1'>
              Create Profile
            </Link>
            <div className='my-2'>
              <button
                onClick={() => deleteAccount()}
                className='btn btn-danger'
              >
                Delete Account
                <i className='fa fa-user-minus' />
              </button>
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          You have not yet setup your profile, please add some details
          <Link to='/create-profile' className='btn btn-primary my-1'>
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
