import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Импортируйте useNavigate

interface AuthContextType {
    isAuthenticated: boolean;
    login: (token: string, navigate: () => void) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    login: () => {},
    logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const navigate = useNavigate(); // Используйте useNavigate для навигации

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

    const login = (token: string, navigate: () => void) => {
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
        navigate(); // Переход на страницу после успешной аутентификации
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
