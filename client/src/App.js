import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Landing from './components/layouts/Landing';
import Login from './components/auth/Login';
import Alert from './components/layouts/Alert';
import Registeration from './components/auth/Registeration';
import { loadUser } from './actions/auth';
import './App.css';
import CreateProfile from './components/profile-forms/CreateProfile';
// Redux
import { Provider } from 'react-redux';
import { setAuthToken } from './utils/setAuthToken';
import store from './store';
import Profiles from './components/profiles/Profiles';
import Posts from './components/posts/Posts';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import Profile from './components/profile/Profile';
import Post from './components/post/Post';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <Alert />
          <Switch>
            <Route exact path='/Registeration' component={Registeration} />
            <Route exact path='/Login' component={Login} />
            <Route exact path='/profiles' component={Profiles} />
            <Route exact path='/profile/:id' component={Profile} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute
              exact
              path='/create-profile'
              component={CreateProfile}
            />
            <PrivateRoute exact path='/posts' component={Posts} />
            <PrivateRoute exact path='/posts/:id' component={Post} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
