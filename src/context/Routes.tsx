import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  element: React.ReactNode;
} & RouteProps;

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Route {...rest} element={element} /> : <Navigate to="/auth" />;
};

type PublicRouteProps = {
  element: React.ReactNode;
} & RouteProps;

export const PublicRoute: React.FC<PublicRouteProps> = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to="/" /> : <Route {...rest} element={element} />;
};
