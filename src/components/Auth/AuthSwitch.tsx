import React, { useState } from 'react';
import LoginForm from './Login/LoginForm.tsx';
import RegisterForm from './Registration/RegistrationForm.tsx';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: orange[500],
        },
    },
});


const AuthSwitch: React.FC = () => {
    const [isLogin] = useState(true);

    return (
        <ThemeProvider theme={theme}>
            <div>
                {isLogin ? <LoginForm /> : <RegisterForm />}
                <Typography align="center" variant="body1" style={{ marginTop: 20 }}>
                    {isLogin ? (
                        <>
                            Нет аккаунта?{' '}
                            <Link to="/register" style={{ color: theme.palette.primary.main }}>
                                Зарегистрируйтесь
                            </Link>
                        </>
                    ) : (
                        <>
                            Уже есть аккаунт?{' '}
                            <Link to="/login" style={{ color: theme.palette.primary.main }}>
                                Войдите
                            </Link>
                        </>
                    )}
                </Typography>
            </div>
        </ThemeProvider>
    );
};

export default AuthSwitch;
