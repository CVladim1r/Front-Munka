import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthSwitch from './components/AuthSwitch';
import { AuthProvider } from './context/AuthContext';
import MainPage from './components/MainPage'; // Import MainPage

const App: React.FC = () => {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/auth" element={<AuthSwitch />} />
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default App;
