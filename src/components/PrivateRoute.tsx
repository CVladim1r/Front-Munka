// components/PrivateRoute.tsx
import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute: React.FC<{ path: string }> = ({ path, ...props }) => {
    const { isAuthenticated } = useContext(AuthContext) || { isAuthenticated: false };

    return isAuthenticated ? (
        <Route {...props} path={path} />
    ) : (
        <Navigate to="/auth" replace />
    );
};

export default PrivateRoute;
