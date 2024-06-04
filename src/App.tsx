import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import { AuthProvider, useAuth } from './context/AuthContext';
import AuthSwitch from './context/AuthSwitch';

const App: React.FC = () => {
    return (
        <Router>
            <AuthProvider>
                <AppRoutes />
            </AuthProvider>
        </Router>
    );
};

const AppRoutes: React.FC = () => {
    const { isAuthenticated } = useAuth();

    return (
        <Routes>
            <Route path="/auth" element={<AuthSwitch />} />
            {isAuthenticated ? (
                <Route path="/" element={<MainPage />} />
            ) : (
                <Route path="*" element={<Navigate to="/auth" />} />
            )}
        </Routes>
    );
};

export default App;
