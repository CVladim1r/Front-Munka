import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { TextField, Button, Typography, Paper } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: orange[500],
        },
    },
});

const RegisterForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/register', { email, password, full_name: fullName, address, phone });
            alert('Registration successful');
        } catch (error) {
            console.error('Registration error');
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
                    <TextField
                        label="ФИО"
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Адрес"
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Телефон"
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Зарегистрироваться
                    </Button>
                </form>
                <Typography variant="body1" align="center" style={{ marginTop: 20 }}>
                    Уже есть аккаунт?{' '}
                    <Link to="/login" style={{ color: theme.palette.primary.main }}>
                        Войдите
                    </Link>
                </Typography>
            </Paper>
        </ThemeProvider>
    );
};

export default RegisterForm;
