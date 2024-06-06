import React, { useState, useContext} from 'react';
import axios from 'axios';
import { AuthContext } from '../../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { TextField, Button, Typography, Container, Divider, Checkbox} from '@mui/material';
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
    const { login } = useContext(AuthContext) || { login: () => {} };
    const navigate = useNavigate(); // Хук для навигации

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
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
                width: '50%'
                }}>
                    <div>

                        <Typography variant="h5" alignItems="left" gutterBottom style={{color: '#72412B', marginBottom:'8px'}} >
                            <strong>Авторизация</strong>
                        </Typography>
                        <Typography style={{fontSize: '16px', color: '#D0B1A3', marginBottom:'36px'}}>
                            Введи свою почту и пароль для авторизации!
                        </Typography>
                    <img src={Google} alt="google" style={{margin: '0 0 26px 0 '}}/>
                    <Divider variant='middle' style={{margin: '0px 0 26px 0'}}>
                        <Typography sx = {{color: ' #A3AED0'}}>or</Typography>
                    </Divider>
                    <form onSubmit={handleSubmit}>
                        <Typography style={{fontSize: '16px', color:'#9F6D56', marginBottom: '6.5px'}}>E-mail</Typography>
                        <TextField
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                            margin="normal"
                            required
                            sx={{marginBottom:'3vh'}}
                            InputProps={{
                                sx: { borderRadius: '16px' }
                            }}
                        />
                        <Typography style={{fontSize: '16px', width: '50vh', color: '#9F6D56', marginBottom:'6.5px'}}>Пароль</Typography>
                        <TextField
                            label="Пароль"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth
                            margin="normal"
                            required
                            sx ={{marginBottom:'2vh'}}
                            InputProps={{
                                sx: { borderRadius: '16px' }
                            }}
                        />
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', paddingBottom:'2px'}}>
                            <div style={{display: 'flex'}}>
                                <Checkbox>
                                </Checkbox>
                                <Typography style={{marginTop:'1vh', marginBottom:'1vh'}}>Показать пароль</Typography>
                            </div>
                            <Link to='/' style={{display:'flex', justifyContent:'column', alignItems:'center', textDecoration: 'none', color:'#E39E5B'}}>Забыл пароль?</Link>
                        </div>
                        <Button type="submit" variant="contained" fullWidth style={{backgroundColor: '#E39E5B', borderRadius: '16px'}}>
                            <Typography sx={{color:'white'}}>Sign in</Typography>
                        </Button>
                        <Typography variant="body1" align="left" style={{ marginTop: 20, color:'#74522B', textShadow:'2px 2px 2px 2px #E39E5B'}}>
                            Не зарегистрирован?{' '}
                            <Link to="/registration" style={{ color: theme.palette.primary.main, textDecoration:'none', fontWeight:'bold', textShadow:'2px 2px 2px 2px #E39E5B'}}>
                                Создать аккаунт
                            </Link>
                            </Typography>
                    </form>
                </div>
            </Container>
        </ThemeProvider>
    );
};

export default LoginForm;
