import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
    isAuthenticated: boolean;
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
    isAuthenticated: true, //
    login: () => {},
    logout: () => {},
});

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true); //
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.post('http://localhost:5000/verify_token', {}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                setIsAuthenticated(true);
            })
            .catch(error => {
                console.error("Token verification error:", error.response?.data || error.message);
                localStorage.removeItem('token');
                setIsAuthenticated(false);
            });
        }
    }, []);

    const login = (token: string) => {
        localStorage.setItem('token', token);
        setIsAuthenticated(true); //
        navigate('/');
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false); //
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider, useAuth };
