import React, { useState, Fragment } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { set } from 'mongoose';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    status: '',
    skills: '',
    bio: '',
    medium: '',
    facebook: '',
    linkedin: '',
  });

  const [displaySocialInput, toggleSocialInputs] = useState(false);

  const { status, skills, bio, medium, facebook, linkedin } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };

  const goBack = () => {
    return <Redirect to='/dashboard' />;
  };

  const style = {
    'margin-top': '70px',
  };

  return (
    <div style={style}>
      <Fragment>
        <div>
          <h1 className='large text-primary'>Create Your Profile</h1>
          <p className='lead'>
            <i className='fa fa-user'></i> Let's get some information to make
            your profile stand out
          </p>
          <small>* = required field</small>
          <form className='form' onSubmit={(e) => onSubmit(e)}>
            <div className='form-group'>
              <select
                name='status'
                value={status}
                onChange={(e) => onChange(e)}
                required
              >
                <option value='0'>* Select your role</option>
                <option value='Student'>Student</option>
                <option value='Assistant Proffessor'>
                  Assistant Professor
                </option>
                <option value='Professor'>Professor</option>
              </select>
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='* Skills'
                name='skills'
                value={skills}
                onChange={(e) => onChange(e)}
                required
              />
              <small className='form-text'>
                Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
              </small>
            </div>
            <div className='form-group'>
              <textarea
                placeholder='A short bio of yourself'
                name='bio'
                value={bio}
                onChange={(e) => onChange(e)}
                required
              ></textarea>
              <small className='form-text'>
                Tell us a little about yourself
              </small>
            </div>

            <div className='my-2'>
              <button
                onClick={() => toggleSocialInputs(!displaySocialInput)}
                type='button'
                className='btn btn-light'
              >
                Add Social Network Links
              </button>
              <span>Optional</span>
            </div>

            {displaySocialInput && (
              <Fragment>
                <div className='form-group social-input'>
                  <i className='fa fa-itter fa-2x'></i>
                  <input
                    type='text'
                    placeholder='Medium URL'
                    name='medium'
                    value={medium}
                    onChange={(e) => onChange(e)}
                  />
                </div>

                <div className='form-group social-input'>
                  <i className='fa fa-facebook fa-2x'></i>
                  <input
                    type='text'
                    placeholder='Facebook URL'
                    name='facebook'
                    value={facebook}
                    onChange={(e) => onChange(e)}
                  />
                </div>

                <div className='form-group social-input'>
                  <i className='fa fa-linkedin fa-2x'></i>
                  <input
                    type='text'
                    placeholder='Linkedin URL'
                    name='linkedin'
                    value={linkedin}
                    onChange={(e) => onChange(e)}
                  />
                </div>
              </Fragment>
            )}

            <input type='submit' className='btn btn-primary my-1' />
            <a
              onClick={() => goBack()}
              className='btn btn-light my-1'
              href='dashboard.html'
            >
              Go Back
            </a>
          </form>
        </div>
      </Fragment>
    </div>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
