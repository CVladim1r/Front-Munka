import React, { useState, useContext} from 'react';
import axios from 'axios';
import { AuthContext } from '../../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { TextField, Button, Typography, Container, Divider} from '@mui/material';
import Google from '../../../../public/Google.svg';

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
    const [rpassword, setRPassword] = useState('')
    const [passwordMatch, setPasswordMatch] = useState(true)

    const { login } = useContext(AuthContext) || { login: () => {} };
    const navigate = useNavigate(); // Хук для навигации

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== rpassword) {
            setPasswordMatch(false);
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            login(response.data.access_token);
            navigate('/'); // Переход на главную страницу после успешной аутентификации
        } catch (error) {
            alert('Не удалось авторизоваться'); // !!!доделать
        }
    };

    return (
        <ThemeProvider theme={theme}>
                <Container style={{
                marginLeft: '0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                marginTop: '25vh',
                width: '50%',
                marginBlock:'15vh'
                }}>
                        <Typography variant="h5" alignItems="left" gutterBottom style={{color: '#72412B'}} >
                            <strong>Авторизация</strong>
                        </Typography>
                        <Typography style={{fontSize: '16px', color: '#D0B1A3'}}>
                            Введи свою почту и пароль для авторизации!
                        </Typography>
                    <img src={Google} alt="google" style={{margin: '3vh 0 3vh 0 '}}/>
                    <Divider variant='fullWidth' style={{marginTop: '3px'}}/>
                    <form onSubmit={handleSubmit}>
                        <Typography style={{fontSize: '16px', color:'#9F6D56'}}>E-mail</Typography>
                        <TextField
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                            margin="normal"
                            required
                        />
                        <Typography style={{fontSize: '16px', width: '50vh', color: '#9F6D56'}}>Пароль</Typography>
                        <TextField
                            label="Пароль"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth
                            margin="normal"
                            required
                        />
                        <Typography style={{fontSize: '16px', color:'#9F6D56'}}>Повторите пароль</Typography>
                        <TextField
                            label='Повторите пароль'
                            type='password'
                            value={rpassword}
                            onChange={(g) => setRPassword(g.target.value)}
                            fullWidth
                            margin='normal'
                            required
                        />
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Войти
                        </Button>
                        <Typography variant="body1" align="center" style={{ marginTop: 20 }}>
                            Нет аккаунта?{' '}
                            <Link to="/registration" style={{ color: theme.palette.primary.main }}>
                                Зарегистрируйтесь
                            </Link>
                            </Typography>
                        </form>
                    
                </Container>
        </ThemeProvider>
    );
};

export default LoginForm;
