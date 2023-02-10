import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const useHideRoute = ({ component: Component, ...rest }) => {
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
};

const isMobileDevice = () => {
  return (
    typeof window.orientation !== 'undefined' ||
    navigator.userAgent.indexOf('IEMobile') !== -1
  );
}

export default useHideRoute;
