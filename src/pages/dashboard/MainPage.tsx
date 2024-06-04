import { Box, Button, Container, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const MainPage: React.FC = () => {
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    };

    return (
        <Container maxWidth="md">
            <Box mt={5}>
                <Typography variant="h4" align="center" gutterBottom>
                    Welcome to the Main Page
                </Typography>
                <Box display="flex" justifyContent="center" mt={2}>
                    <Button variant="contained" onClick={handleLogout}>
                        Logout
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default MainPage;
