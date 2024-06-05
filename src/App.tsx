import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import MainPage from './pages/dashboard/MainPage';
import LoginPage from './pages/authentication/LoginPage.tsx';
import RegisterForm from './components/Auth/Registration/RegistrationForm';
import MainLayout from './pages/MainLayout';
import AnalyticsPage from './pages/dashboard/AnalyticsPage';
import ContactsPage from './pages/dashboard/ContactsPage';
import ProfilePage from './pages/dashboard/ProfilePage';
import VacanciesPage from './pages/dashboard/VacanciesPage';

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
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegisterForm />} />
            {isAuthenticated ? (
                <Route
                    path="/*"
                    element={
                        <MainLayout>
                            <Routes>
                                <Route path="dashboard/main" element={<MainPage />} />
                                <Route path="dashboard/analytics" element={<AnalyticsPage />} />
                                <Route path="dashboard/contacts" element={<ContactsPage />} />
                                <Route path="dashboard/profile" element={<ProfilePage />} />
                                <Route path="dashboard/vacancies" element={<VacanciesPage />} />
                                <Route path="*" element={<Navigate to="/dashboard/main" />} />
                            </Routes>
                        </MainLayout>
                    }
                />
            ) : (
                <Route path="*" element={<Navigate to="/login" />} />
            )}
        </Routes>
    );
};

export default App;
