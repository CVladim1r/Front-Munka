import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PublicRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? <Navigate to="/" /> : <Route element={element} />;
};

export default PublicRoute;
