import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const HideRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isMobileDevice() ? (
        <Redirect to="/mobile" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

function isMobileDevice() {
  return (
    typeof window.orientation !== 'undefined' ||
    navigator.userAgent.indexOf('IEMobile') !== -1
  );
}

export default HideRoute;
