import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { TextField, Button, Typography, Container, Divider} from '@mui/material';
import Google  from '../../../../public/Google.svg';



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
            alert('Не удалось зарегистрироваться');
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container style={{
                marginRight: '0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                width: '50%'
                }}>
                <div>

                    <Typography variant="h5" align="left" gutterBottom sx={{fontSize: '36px', color:'#72412B', marginBottom:'8px'}}>
                        Регистрация
                    </Typography>
                    <Typography variant="h6" align="left" gutterBottom sx={{fontSize: '16px', color:'#D0B1A3', marginBottom: '26px'}}>
                        Введи свою почту и пароль для регистрации!
                    </Typography>
                    <img src={Google} alt="google" style={{alignItems:'center', marginBottom:'26px'}}/>
                    <Divider variant='middle' style={{margin: '0px 0 26px 0'}}>
                        <Typography style={{color:'#A3AED0', fontSize:'14'}}>or </Typography>
                    </Divider>
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
                            style={{marginBottom:'px'}}
                        />
                        <Typography style={{fontSize: '16px', width: '50vh', color: '#9F6D56'}}>ФИО</Typography>
                        <TextField
                            label="ФИО"
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            fullWidth
                            margin="normal"
                            style={{marginBottom:'12px'}}
                        />
                        <Typography style={{fontSize: '16px', width: '50vh', color: '#9F6D56'}}>Адрес</Typography>
                        <TextField
                            label="Адрес"
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            fullWidth
                            margin="normal"
                            style={{marginBottom:'12px'}}
                        />
                        <Typography style={{fontSize: '16px', width: '50vh', color: '#9F6D56'}}>Телефон</Typography>
                        <TextField
                            label="Телефон"
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            fullWidth
                            margin="normal"
                            style={{marginBottom:'12px'}}
                        />
                        <Button type="submit" variant="contained" fullWidth style={{backgroundColor: '#E39E5B', borderRadius: '16px'}}>
                            <Typography sx={{color:'white'}}>Sign in</Typography>
                        </Button>
                    </form>
                    <Typography variant="body1" align="center" style={{ marginTop: 20 }}>
                        Уже есть аккаунт?{' '}
                        <Link to="/login" style={{ color: theme.palette.primary.main }}>
                            Войдите
                        </Link>
                    </Typography>
                </div>
            </Container>
        </ThemeProvider>
    );
};

export default RegisterForm;
