import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { TextField, Button, Typography, Paper } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: orange[500],
        },
    },
});

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext) || { login: () => {} };
    const navigate = useNavigate(); // Хук для навигации

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            login(response.data.access_token);
            navigate('/'); // Переход на главную страницу после успешной аутентификации
        } catch (error) {
            console.error('Login error');
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Paper elevation={3} style={{ padding: 20, maxWidth: 400, margin: 'auto', marginTop: 50 }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Регистрация
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Пароль"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Зарегистрироваться
                    </Button>
                </form>
            </Paper>
        </ThemeProvider>
    );
};

export default LoginForm;
