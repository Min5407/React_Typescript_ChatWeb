import React, { FC, ReactNode } from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import { ROOT } from 'constant/Routes';
import Auth from 'components/Auth/login';

const PrivateRoute: FC<RouteProps> = ({ ...rest }) => {
  const isSignIn = false;
  return isSignIn ? (
    <Route {...rest} />
  ) : (
    <Route path={ROOT.ROOT} component={Auth} />
  );
};

export default PrivateRoute;
