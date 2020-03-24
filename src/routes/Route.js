import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Store } from '../store';

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  path,
  ...rest
}) {
  const [{ user }] = useContext(Store);
  if (!user.logged_in && isPrivate) {
    return <Redirect to="/" />;
  }

  if (user.logged_in && path === '/') {
    return <Redirect to="/home" />;
  }

  if (!user.logged_in && !isPrivate) {
    return <Route {...rest} component={Component} />;
  }

  if (user.logged_in && isPrivate) {
    return <Route {...rest} component={Component} />;
  }

  return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
