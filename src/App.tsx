import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import { AuthProvider, useAuth } from './context/AuthContext';
//import AuthSwitch from './context/AuthSwitch';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

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
      //      <Route path="/auth" element={<AuthSwitch />} />

    return (
        <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/registration" element={<RegisterForm />} />
            {isAuthenticated ? (
                <Route path="/" element={<MainPage />} />
            ) : (
                <Route path="*" element={<Navigate to="/login" />} />
            )}
        </Routes>
    );
};

export default App;
